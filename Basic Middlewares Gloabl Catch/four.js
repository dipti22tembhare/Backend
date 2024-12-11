const express = require("express")
const app = express()
const port = 3000


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Dipu 👩‍💻")
})


app.post('/healthCheckUp', (req, res) => {

  let kidney = req.body.kidney;

  const numOfKidney = kidney.length;

  res.send(`The Number of ${numOfKidney} Kidney`)


  // Global Catch

  app.use(function (err, req, res, next) {
    res.status(400).json({
      msg: "Server Failed 🫣"
    })
  })

})

app.listen(port, () => {
  console.log(`listening on ${port}`);

})