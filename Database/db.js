var {MongoClient} = require('mongodb');
//var url = "mongodb://localhost:27017/";
var url='mongodb+srv://karthik:Password@123@cluster0.4ynbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client=new MongoClient(url);
//const dbname='admin'
const dbname='sample_mflix'
async function main()
{
    await client.connect();
    const db=client.db(dbname)
    return db
}
module.exports={main}
// MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
// var dbo = db.db("admin"); 
// dbo.collection("student").find({}).toArray(function(err, result) {
//  if (err) throw err;
//  console.log(result);
//  db.close();
//  });
//  });