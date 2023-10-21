import mongoose from 'mongoose'

const tutorSchema = new mongoose.Schema({
  Nombre:{
    type:String,
    required:true,
  },
  salonId:{
    type:mongoose.Types.ObjectId,
    ref:'Salon'
  },
  TelefonoId:{
    type:mongoose.Types.ObjectId,
    ref:'Telefono'
  },
  DomicilioId:{
    type:mongoose.Types.ObjectId,
    ref:'Domicilio'
  },
  RolId:{
    type:mongoose.Types.ObjectId,
    ref:'Rol'
  }
})

export const Tutor = mongoose.model('Tutor',tutorSchema);