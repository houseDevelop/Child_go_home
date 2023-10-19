
// configuracion de rutas y procesos requeridos para valdidar o modificar rutas base
export const loginView = async (rec,res)=>{
  return res.status(200).render('index',{titulo:"Login",status:1})
}
export const login = async (req,res)=>{
  
  try {
    const usertest={id:'12321',user_name:'admin', psw:'1234'}
    const {userName,psw}=req.body
    if(!userName||!psw) throw new Error('Faltan campos por llenar')

    const validuser = await usertest.user_name === userName
    const validpsw = await usertest.psw === psw
    console.log(validuser, validpsw)
    if(!validuser || !validpsw) throw new Error('Usuario o contraseña no coinciden.')
    res.status(200).redirect(`/${usertest.id}`)  

  } catch (err) {
    console.log(err)
    return res.status(403).json({error:err.message})
  }
}