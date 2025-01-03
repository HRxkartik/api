 const db=require('../Database/db')
const readteacherfile=async (req,res)=>{
    
       const database=await db.main();
       
       const collection=await database.collection('teacher')
       const findresult=await collection.find({}).toArray()

        res.send({
            "status":200,
            "message":findresult
        })
}


const insertteacher=async (req,res)=>{
    
    const database=await db.main();
     
    const collection=await database.collection('teacher')
    const insertresult=await collection.insertOne(req.body)

     res.send({
         "status":2000,
         "message":insertresult.insertedCount
     })
}



const updateteacher=async (req,res)=>{
    
    const database=await db.main();
    

    const collection=await database.collection('teacher')
    const updateresult=await collection.updateOne({first_name:req.query.name}, {$set: req.body})
     if(updateresult.modifiedCount>0)
     {
        res.send({
            "status":200,
            "message":"record is updates successfully"
        })
     }
     else
     {
        res.send({
            "status":400,
            "message":"please try again later"
        })
     }
     }
     const deleteteacher = async (req, res) => {
        const database = await db.main();
        const collection = database.collection('teacher');
    
        const deleteResult = await collection.deleteOne(req.body);
    
        res.send({
            status: 200,
            message: deleteResult.deletedCount
        })
    }
module.exports={readteacherfile,insertteacher,updateteacher,deleteteacher}