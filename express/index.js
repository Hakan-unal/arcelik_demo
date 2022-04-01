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
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
});



app.get("/authenticate", (req, res) => {
    return res.send("get 1 TEST")

})

app.post("/authenticate", (req, res) => {
    return res.send("post 1 TEST")

})

app.put("/authenticate", (req, res) => {
    return res.send("put 1 TEST")

})

app.delete("/authenticate", (req, res) => {
    return res.send("delete TEST")

})

app.get("/", (req, res) => {
    return res.send("get TEST")

})

app.post("/", (req, res) => {
    return res.send("post TEST")

})
app.put("/", (req, res) => {
    return res.send("put TEST")

})
app.delete("/", (req, res) => {
    return res.send("delete TEST")

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

const port = process.env.PORT || 443
app.listen(port, () => {
    console.log("Listen port " + port)
});