// import express from 'express';
// import type { Request, Response } from 'express';
// const app = express();
// app.use(express.json());

import { prisma } from './prisma';


  async function main(){
    const user = await  prisma.user.findFirst({
   where:{
    id: 5
   },
   include:{
    todos:true
   }
    })
    console.log(user)

  }
  
  main();
