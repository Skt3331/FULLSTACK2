const express=require("express")
const app =express();
const session =require("express-session");
const flash =require("connect-flash");

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

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
app.use(flash());   

app.get("/register",(req,res)=>
{
    // http://localhost:3000/register?name=saurav
    let {name="anonymous"}=req.query;
    req.session.name=name;
    req.flash("sucess","user registed sucess");
    res.redirect("/hello");
});
//with session id the session data will transfer variable
app.get("/hello",(req,res)=>
{
//    res.send(`hello ${req.session.name}`); 
//    console.log(req.flash("sucess"));
   res.render("hellow.ejs",{name:req.session.name,msg:req.flash("sucess")});

//    hello saurav
});





app.listen(3000,()=>
{
    console.log("app is listenig");
});