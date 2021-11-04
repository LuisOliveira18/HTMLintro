const express = require('express')
const app = express()
 

app.use(express.static('./public'))

app.get('/', (req, res)=> {
  res.send('Olá amaingue.')
})

app.get('/:nome', (req,res) => {
  res.json('Hello' + req.params.nome)
})

const port = 3000

app.listen(port, ()=>{
  console.log(`Listenning on port ${port}`)
})