const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('hello world')
})
app.get('/servicios',(req,res)=>{
  res.send('esta es la pagina de servicios')
})
app.use(express.static(__dirname+'/public'))
app.listen(port,()=>{
  console.log(`example app listening at http://localhost:${port}`)
})