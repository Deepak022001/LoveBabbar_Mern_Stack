const mongoose=require('mongoose');
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(processs.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Db ka connection is successfull"))
    .catch((error)=>{
        console.log("Issue in db connectoin");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;