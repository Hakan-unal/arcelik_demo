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
    const { code } = req.body;
    const data = new FormData();

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
            const access_token = params.get("access_token");
            console.log(access_token)

            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`,
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

app.listen(8080, () => {
    console.log("Listen port 8080")
});