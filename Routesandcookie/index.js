const express =require("express");
const app=express()
const cookieparser=require("cookie-parser");


const college=require("./routes/college.js")
const student=require("./routes/student.js");
const cookies=require("./routes/cookies.js");
const sign=require("./routes/sincookies.js");

// app.use(cookieparser());/
app.use(cookieparser("thisisencrepted"));
app.use("/college",college);
app.use("/college/:id/student",student)
app.use("/cookie",cookies);
app.use("/sign",sign);

// app.all("*",(req,res)=>
// {
//     console.log("working");
//     res.send("all is fine");
// });

app.listen("8090",()=>
{
    console.log("Server is Listing"    );
});