const express = require('express')
const app = express()
const port = 3000


app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Home Page",
    })
})

app.get("/healthCheckup", (req, res) => {

    const username = req.headers.username;
    const password = req.headers.password;
    const kidney = req.query.kidney;


    if (!(username === "Dipu" && password === "1234")) {
        res.status(400).json({
            msg: "Please fill the details correctly!"
        })
    } else {
        res.status(200).json({
            msg: `Welcome ${username} your kidney is ${kidney}`
        })
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})