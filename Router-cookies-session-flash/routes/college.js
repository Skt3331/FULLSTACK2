const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>
{
res.send("college home");
});

router.get("/:id",(req,res)=>
{
let {id}=req.params;
res.send(`college id:${id}`);
});

module.exports=router;