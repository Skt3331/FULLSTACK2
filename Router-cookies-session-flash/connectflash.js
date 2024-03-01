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

app.use((req,res,next)=>
{
    res.locals.sucessmsf=req.flash("sucess");
    res.locals.unsucessmsf=req.flash("error");
    next();
});

app.get("/register",(req,res)=>
{
    let {name="anonyymus"}=req.query;
    req.session.name=name; 
    if (req.session.name==="anonyymus") {
       msg=req.flash("error","user not be register");
    }
    else{
       msg= req.flash("sucess","usser registred sucess");
    }
    res.redirect("/hellows");

    
});
app.get("/hellows",(req,res)=>
{
   
   
    res.render("hellow.ejs",{name:req.session.name});
});


// flash without local

// app.get("/register",(req,res)=>
// {
//     // http://localhost:3000/register?name=saurav
//     let {name="anonymous"}=req.query;
//     req.session.name=name;
//     req.flash("sucess","user registed sucess");
//     res.redirect("/hello");
// });
// //with session id the session data will transfer variable
// app.get("/hello",(req,res)=>
// {
// //    res.send(`hello ${req.session.name}`); 
// //    console.log(req.flash("sucess"));
//    res.render("hellow.ejs",{name:req.session.name,msg:req.flash("sucess")});

// //    http://localhost:3000/register?name=saurav
// // output
// // user registed sucess   after refresh this flash will be disappere
// // welcome saurav 
// });





app.listen(3000,()=>
{
    console.log("app is listenig");
});