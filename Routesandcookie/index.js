const express =require("express");
const app=express()


const college=require("./routes/college.js")
const student=require("./routes/student.js");
const cookies=require("./routes/cookies.js");


app.use("/college",college);
app.use("/college/:id/student",student)
app.use("/cookie",cookies);
;
// app.all("*",(req,res)=>
// {
//     console.log("working");
//     res.send("all is fine");
// });

app.listen("8090",()=>
{
    console.log("Server is Listing"    );
});