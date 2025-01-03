const express=require('express')
const indexRouter=require('./Router/index')

const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use("/",indexRouter)
 
app.listen(3001,()=>{
  console.log("Server running on port 3001");
})
 
 