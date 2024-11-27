
import mongoose from 'mongoose'
import Connection from '../db'



class Organisations extends Connection{
  organisationsShema:mongoose.Schema = new mongoose.Schema({
    organisation:String,
    description:String
  })  
  model:any
  constructor(auth) {
    super(auth.host,auth.user,auth.pass ) 
    super.connect()
    this.model = mongoose.model('organisations', this.organisationsShema);
  }

  async find(){
    
    await this.model.find({
      host:'localhost'
    })
  }

  async save(orgName,desc){
    const org = new this.model({
        organisation:orgName,
        description:desc
    })
    await this.model.save()
  }
  

}

export default  Organisations;
