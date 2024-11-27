import mongoose from 'mongoose'

class DB {
  user:string;
  password:string;
  host:string;

  constructor(host:string,user:string,password:string) {
      this.user = user;
      this.password = password;
      this.host = host


  }

 async connect(){
  await mongoose.connect(`mongodb://${(this.user||this.password)?`${this.user}:${this.password}@`:''}${this.host}/domain`)
 }


}

export default  DB;
