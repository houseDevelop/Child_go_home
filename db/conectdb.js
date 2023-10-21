import { error } from 'console'
import mongoose from 'mongoose'

try{
  await mongoose.connect(process.env.DB_URI+process.env.DB_NAME,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  })
  console.log('Database runing')
}catch(err){
  console.log(err)
}