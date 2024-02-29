const express=require("express");
const route=express.Router({mergeParams:true});

route.get("/",(req,res)=>
{
    res.send("enter in cookies route");
})
route.get("/setcookies",(req,res)=>
{
    res.cookie("name","saurav");
    res.cookie("age","21");
    res.send("send a cokkie");
});



module.exports=route;