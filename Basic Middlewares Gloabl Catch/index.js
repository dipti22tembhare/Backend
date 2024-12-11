const express = require('express')
const app = express()
const port = 3000


app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post('/checkHealth', (req, res) => {

  let kidney = req.body.kidney;

  const noKidney = kidney.length;

  res.send(`you 😘 have ${noKidney} kidney 💪 in your body`)

  app.use(function(err, req, res, next){
    res.status(400).json({
      msg : "server failed ❌❌"
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})