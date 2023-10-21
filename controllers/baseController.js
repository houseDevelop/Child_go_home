
// configuracion de rutas y procesos requeridos para valdidar o modificar rutas base
export const loginView = async (rec,res)=>{
  return res.status(200).render('index',{titulo:"Login",status:1,error:''})
}
export const login = async (req,res)=>{
  
  try {
    const usertest={id:'12321',user_name:'admin', psw:'1234'}
    const {userName,psw}=req.body
    
    let error = false;
    
    if(!userName||!psw){ 
      error = true;
      throw new Error('Faltan campos por llenar')
    }

    const validuser = usertest.user_name === userName
    const validpsw = usertest.psw === psw
    
    if (!validuser || !validpsw) throw new Error('Contraseña o usuario incorrectos')

    res.status(200).redirect(`/${usertest.id}`);

  } catch (err) {
    console.log(err)
    return res.status(403).render('index',{titulo:'Login',status:1,error:err.message})
  }
}