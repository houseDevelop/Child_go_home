import { Rol } from "../db/schemas/rolSchema.js"
import { Maestro } from "../db/schemas/maestroSchema.js"
// configuracion de rutas y procesos requeridos para valdidar o modificar rutas base
export const loginView = async (rec,res)=>{
  try{
    const roles=['user','prefecto','director']
    const descriptions = ['solo recibe notificaciones por parte del sistema','Tiene acceso a una vista donde puede solo notificar la salida de algún grupo','puede modificar, actualizar, borrar y dar de alta nuevos salones así como padres de familia o tutores']
    const rolesDB = await Rol.find()
    if(rolesDB.length<1){
      for(let idx =0;idx<roles.length;idx++){
        let rolDB = await Rol.findOne({rol:roles[idx]})
        if(!rolDB){
          rolDB =new Rol({Rol:roles[idx],Descripcion:descriptions[idx]})
          await rolDB.save()
        }else{
          throw new Error(`El rol ${roles[idx]} ya existe`)
        }
      }
    }
    res.status(200).render('index',{titulo:'Login',status:1}) 
  }catch(err){
    console.log(err)

  }
}
export const login = async (req,res)=>{
  
  try {
    const {userName,psw}=req.body
    if(!userName||!psw) throw new Error('Faltan campos por llenar')

    const validuser = await Maestro.findOne({UserName:userName})
    if(!validuser || !validuser.psw ===psw) throw new Error('Usuario o contraseña no coinciden.')
    res.status(200).redirect(`/${usertest.id}`)  

  } catch (err) {
    console.log(err)
    return res.status(403).render('index',{error:err.message})
  }
}
