const express=require("express")
const app =express();
const session =require("express-session");


// app.use(session({secret:"mysupersession"}));

// app.get("/test",(req,res)=>{
// res.send("test successful");
// });

app.use(
    session({
        secret:"secreatcode",
        resave:false,
        saveUninitialized:true,
    })
);

app.get("/register",(req,res)=>
{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    res.send(name);
});
app.get("/hello",(req,res)=>
{
   res.send(`hello ${req.session.name}`); 
});
// //caluculating path visited 
// app.get("/",(req,res)=>
// {
//     if(req.session.visitedcount)
//     {
//         req.session.visitedcount++
//     }
//     else{
//          req.session.visitedcount=1;
//     }
   
// res.send(`this site visited ${req.session.visitedcount}`);
// // req.session.visitedcount++;
// });
app.listen(3000,()=>
{
    console.log("app is listenig");
});