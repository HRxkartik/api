 const db=require('../Database/db')
const readtstudentdata=async (req,res)=>{
    
       const database=await db.main();
       
       const collection=await database.collection('student')
       const findresult=await collection.find({}).toArray()

        res.send({
            "status":2000,
            "message":findresult
        })
    }
        const insertstudent=async (req,res)=>{
            
            const database=await db.main();
             
            const collection=await database.collection('student')
            const insertresult=await collection.insertOne(req.body)
        
             res.send({
                 "status":2000,
                 "message":insertresult.insertedCount
             })
        }
       
        
        
        const updatestudent=async (req,res)=>{
            
            const database=await db.main();
            
        
            const collection=await database.collection('student')
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
            const deletestudent = async (req, res) => {
                const database = await db.main();
                const collection = database.collection('student');
            
                const deleteResult = await collection.deleteOne(req.body);
            
                res.send({
                    status: 200,
                    message: deleteResult.deletedCount
                })
            }

module.exports={readtstudentdata,updatestudent,insertstudent,deletestudent}