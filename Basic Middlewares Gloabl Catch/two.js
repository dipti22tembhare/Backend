const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


// Middleware - 


let numberOfRequests = 0;


function numberOfRequest(req, res, next){

    numberOfRequests++;
    console.log(`The Number of Request = ${numberOfRequests}`)
    next();
}


app.use(numberOfRequest);

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "ITs a shopping mall !"
    })
})

app.get('/shoppingMall', (req, res) => {

    const username = req.headers.username;
    const password = req.headers.password;
    const noOfShop = req.query.noOfShop;

    if (!(username === "dipu" && password === "1234")) {
        res.status(404).json({
            msg: "invalid info"

        })

    } else {
        res.status(200).json({
            msg: "Done🔥"
        })
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})