const express = require("express");
const { id, redirect, secret } = require("./config");
const FormData = require("form-data");
const bodyParser = require("body-parser");
var cors = require('cors');
const fetch = require("node-fetch");


const app = express();

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));




app.post("/authenticate", (req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
        res.statusCode = "Options" === req.method ? 200 : 405
        res.setHeader('Allow', "GET, HEAD, OPTIONS")
        res.setHeader("Content-length", "0")
    }
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
                    Authorization: `token ${access_token}`,
                    "Content-Type": "application/json"
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            const url = "https://api.github.com/users/" + response.login + "/repos"
            return fetch(url, {
                headers: {
                    Authorization: `token ${access_token}`,
                    "Content-Type": "application/json"
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

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Listen port " + port)
});