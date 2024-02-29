const express =require("express");
// const router=express.Router();
const router =express.Router({mergeParams:true}); //get parent url info like id

// router.use(express.urlencoded())
router.get("/",(req,res)=>
{
    let {id="non"} =req.params;
    res.send(`Student college id:${id}`);
});

router.get("/:sid",(req,res)=>
{
    let {id="nan",sid="nan"}=req.params;
    res.send(`Student ${sid} college id:${id}`)
})

module.exports=router;