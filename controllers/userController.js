

// rutas para usuarios o administradores.
export const dashboard =async (req,res)=>{
  return res.render('grados',{titulo:"Child Go Home -> Dashboard",status:2})
}