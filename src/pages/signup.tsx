import {Signup} from "@repo/ui/components"
import axios from "axios"

export default function SignupPage(){
  console.log("inside here")
  console.log(Signup)
  return <div>

      <Signup onClick={async(username,password)=>{
        // in nextjs frontend and backend on the same base url that is http://localhost:3000 so you dont need cors and base url dont need to write
        const res=await axios.post('api/signup',{
          username:username,
          password:password
        })
        localStorage.setItem("token",res.data.token)
      }}/>
  </div>
}