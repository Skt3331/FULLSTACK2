const express=require("express");
const route=express.Router({mergeParams:true});
const cookieparser=require("cookie-parser");

route.get("/",(req,res)=>
{
    res.send("enter in cookies route");
})
route.get("/setcookies",(req,res)=> //this cookies will display in the console/application/cookies
{
    res.cookie("name","saurav");
    res.cookie("age","21");
    res.send("send a cokkie");
});

route.get("/getcookies",(req,res)=>
{
// console.log(req.cookies); //getting cookies app.use(cookieparser())
res.send(req.cookies);
});

module.exports=route;