let alreadyDone=false;
import mongoose from "mongoose";
// not work in multiple files
export async function ensureDnConnected(){
  if(alreadyDone){
    return;
  }
await mongoose.connect("mongodb+srv://nilesh:1234@cluster0.rqe7wao.mongodb.net");
  alreadyDone=true;
}

// (()=>{}) best solution