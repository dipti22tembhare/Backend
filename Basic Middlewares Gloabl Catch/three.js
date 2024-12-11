const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

function auth(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(!(username ==="dipu" && password === "2206")){
        res.status(400).json({
            msg : "username or password incorrect"
        })
    }
    else{
        res.status(200).json({
            msg : `welcome ${username} to your officila page !`
        })
    }
    next();
}



app.get('/', auth, (req, res) => {
  res.status(200).json({
    msg : "we welcome youuuu !"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})