import mongoose from'mongoose'

const maestroSchema = new mongoose.Schema({
  Nombre:{
    type:String,
    required:true,
  },
  UserName:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  },
  psw:{
    type:String,
    required:true,
  },
  RolId:{
    type:mongoose.Types.ObjectId,
    ref:'Rol'
  }
})

export const Maestro = mongoose.model('Maestro',maestroSchema);