const express = require("express");
const { id, redirect, secret } = require("./config");
const FormData = require("form-data");
const bodyParser = require("body-parser");
var cors = require('cors');
const fetch = require("node-fetch");


const app = express();

app.use(express.json())



app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    next();
});


app.get("/test", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
})

app.post("/authenticate", (req, res) => {

    const { code } = req.body;
    const data = new FormData();
    let access_token;
    data.append("client_id", id);
    data.append("client_secret", secret);
    data.append("code", code);
    data.append("redirect_uri", redirect);

    fetch(`https://github.com/login/oauth/access_token`, {
        method: "POST",
        body: data,
    })
        .then(async (response) => await response.text())
        .then((paramsString) => {
            let params = new URLSearchParams(paramsString);
            access_token = params.get("access_token");

            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            const url = "https://api.github.com/users/" + response.login + "/repos"
            return fetch(url, {
                headers: {
                    Authorization: `token ${access_token}`
                },
            });
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log("Listen port " + port)
});