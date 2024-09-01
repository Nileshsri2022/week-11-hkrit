// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Admin} from "db";
import { ensureDnConnected } from "@/lib/dbConnect";
const SECRET="SECRET";
import jwt from "jsonwebtoken";
type Data = {
  token?:String;
  message?:String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log("handler is called")
  await ensureDnConnected();
  const {username,password}=req.body;
    const user = await Admin.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new Admin({ username, password });
      await newUser.save();
      const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }


  res.status(200).json({message:"Admin created successfully!!!"});
}
