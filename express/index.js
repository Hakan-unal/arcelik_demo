const express = require("express");
const { id, redirect, secret } = require("./config");
const FormData = require("form-data");
const bodyParser = require("body-parser");
var cors = require('cors');
const fetch = require("node-fetch");


const app = express();

app.use(express.json())



app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/html" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    next();
});



app.get("/authenticate", (req, res) => {
    res.sendFile(path.join(__dirname, '/test.html'));
})

app.post("/authenticate", (req, res) => {
    return res.status(200).json("response")
})

app.put("/authenticate", (req, res) => {
    return res.status(200).json("response")
})

app.delete("/authenticate", (req, res) => {
    return res.status(200).json("response")
})

app.get("/", (req, res) => {
    return res.status(200).json("response")
})

app.post("/", (req, res) => {
    return res.status(200).json("response")
})
app.put("/", (req, res) => {
    return res.status(200).json("response")
})
app.delete("/", (req, res) => {
    return res.status(200).json("response")
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
                    "Content-Type": "text/html"
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            const url = "https://api.github.com/users/" + response.login + "/repos"
            return fetch(url, {
                headers: {
                    Authorization: `token ${access_token}`,
                    "Content-Type": "text/html"
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

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listen port " + port)
});