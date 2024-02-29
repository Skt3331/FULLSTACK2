const express = require("express");
const route =express.Router({mergeParams:true});
const cookieparser=require("cookie-parser");



route.get("/",(req,res)=>{
    res.cookie("name","saurav",{signed:true});
    res.cookie("age ","21",{signed:true});
    res.send("done");

});


route.get("/verify",(req,res)=>
{
    res.send(req.signedCookies);
})

module.exports=route;