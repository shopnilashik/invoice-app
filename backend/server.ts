const express = require('express');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
const app = express()

app.get('/', function (req: any, res: any) {
  res.send('Hello World')
})

app.get('/user', async (req: any, res: any) => {
     const posts = await prisma.user.findMany({
       where: { id: 1 }
      })
      res.json(posts)
    })

app.listen(3000)