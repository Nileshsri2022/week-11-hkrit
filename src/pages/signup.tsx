import {Signup} from "@repo/ui/components"
import axios from "axios"

export default function SignupPage(){
  console.log("inside here")
  console.log(Signup)
  return <div>

      <Signup onClick={async(username,password)=>{
        const res=await axios.post('http://localhost:3000/signup',{
          username:username,
          password:password
        })
      }}/>
  </div>
}