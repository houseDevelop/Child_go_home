import mongoose from 'mongoose'

const telefonoSchema = new mongoose.Schema({
  Telefono:{
    type:String,
    required:true,
    unique:true,
    index:{unique:true}
  }
})

export const Telefono = mongoose.model('Telefono',telefonoSchema);