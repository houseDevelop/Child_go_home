const express = require('express');
const path = require('path')
const app = express();

const port = 3000;


//plantillas
app.set('view engine','ejs')

//rutas de view y configuracion de plantillas
app.set('views',path.join(__dirname,'../view'))


app.use(express.static(path.join(__dirname,'../public')));



app.get('/',(req,res)=>{
  res.status(200).render('index',{titulo:'Main page',subtitulo:'mi titulo dinamico'})
})

app.get('/servicios',(req,res)=>{
  res.status(200).render('servicios',{titulo:'servicios',subtitulo:'Pagina de servicios'})
})
app.use((req,res,next)=>{
  res.status(404).render('404',{titulo:'Pagina 404', message:"The page you are trying to get doesn't exists"})
})

app.listen(port,()=>{
  console.log(`example app listening at http://localhost:${port}`)
})