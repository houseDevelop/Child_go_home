import express from 'express'
import {login} from '../controllers/baseController.js'
import { dashboard } from '../controllers/userController.js'

const router = express.Router()


//Pagina principal Usuario
// router.post('/dashboard',login)
router.get('/',dashboard)

export default router;