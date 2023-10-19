import express from 'express'
import {login, loginView} from '../controllers/baseController.js'

const router = express.Router()


//Pagina princila rutas
router.post('/login',login)
router.get('/',loginView)

export default router;