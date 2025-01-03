const express=require('express')
const steacher=require('../Controller/readteach')
const st=require('../Controller/readfile')
const std=require('../Model/studentlist')
const router=express.Router()

router.get('/getdata',function(req,res){
    res.send({"status":200,
        "message":std.list
     });
      })
   
      router.get('/getstudentdata',st.readtstudentdata)
      router.get('/getteacherdata',steacher.readteacherfile)
      router.post('/addteacher',steacher.insertteacher)
      router.post('/addstudent',st.insertstudent)
      router.post('/insertdata',(req,res)=>{
     res.send({
       status:200,
       message:req.body.name,
       other:req.query
     })
   })
   router.put('/updatedata',steacher.updateteacher)
   router.put('/updatestudentdata',st.updatestudent)
   router.delete('/deleteteacherdata',steacher.deleteteacher)
   router.delete('/deletestudentdata',st.deletestudent)

   module.exports=router