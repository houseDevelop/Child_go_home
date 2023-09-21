const express = require('express');
const path = require('path')
const app = express();

const port = 3000;


app.use(express.static(__dirname+'/public'));



app.get('/',(req,res)=>{
  res.send('hello world')
})

app.get('/servicios',(req,res)=>{
  res.send('esta es la pagina de servicios')
})
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'../public/404.html'
  ))
})

app.listen(port,()=>{
  console.log(`example app listening at http://localhost:${port}`)
})