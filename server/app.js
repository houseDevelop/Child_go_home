import 'dotenv/config.js'
import '../db/conectdb.js'
import express from 'express'
import bodyParser from 'body-parser';
import baseRoutes from '../routes/baseRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express();

const port = process.env.PORT||5000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//plantillas
app.set('view engine','ejs')

//rutas de view y configuracion de plantillas
app.set('views',path.join(__dirname,'../view'))


app.use(express.static(path.join(__dirname,'../public')));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',baseRoutes)

// app.use('/:id',userRoutes)

app.get('/servicios',(req,res)=>{
  res.status(200).render('servicios',{titulo:'servicios',subtitulo:'Pagina de servicios'})
})
app.get('/tutores',(req,res)=>{
  res.status(200).render('tutores',{titulo:'tutores',subtitulo:'Tutores'})
})
app.get('/maestros',(req,res)=>{
  res.status(200).render('maestros',{titulo:'maestros',subtitulo:'Maestros'})
})
app.get("/grados",(req,res)=>{
  res.status(200).render("grados",{titulo:"grados",subtitulo:"Grados"})
})
app.get("/regsalon",(req,res)=>{
  res.status(200).render("regsalon",{titulo:"regsalon",subtitulo:"Registrar Salón"})
})
app.get("/regtutor",(req,res)=>{
  res.status(200).render("regtutor",{titulo:"regtutor",subtitulo:"Registrar Tutor"})
})
app.get("/regmaestro",(req,res)=>{
  res.status(200).render("regmaestro",{titulo:"regmaestro",subtitulo:"Registrar Maestro"})
})
app.get("/listatutores",(req,res)=>{
  res.status(200).render("listatutores",{titulo:"listatutores",subtitulo:"Lista Tutores"})
})
app.get("/listasalon",(req,res)=>{
  res.status(200).render("listasalon",{titulo:"listasalon",subtitulo:"Lista Salones"})
})
app.get("/listamaestros",(req,res)=>{
  res.status(200).render("listamaestros",{titulo:"listamaestros",subtitulo:"Lista Maestros"})
})
app.post("/grados",(req,res)=>{
  res.status(200).render("grados",{titulo:"grados",subtitulo:"Grados"})
})
app.post("/listasalon",(req,res)=>{
  res.status(200).render("listasalon",{titulo:"listasalon",subtitulo:"Lista Salon"})
})
app.post("/listatutores",(req,res)=>{
  res.status(200).render("listatutores",{titulo:"listatutores",subtitulo:"Lista Tutores"})
})
app.post("/listamaestros",(req,res)=>{
  res.status(200).render("listamaestros",{titulo:"listamaestros",subtitulo:"Lista Maestros"})
})
app.use((req,res,next)=>{
  res.status(404).render('404',{titulo:'Pagina 404', message:"The page you are trying to get doesn't exists"})
})

app.listen(port,()=>{
  console.log(`example app listening at ${process.env.APP_DEPLOY}${process.env.PORT}`)
})