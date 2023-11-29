import {Router} from "express";
import instance from "./app.js";
const router = Router();
// let info;
router.get('/',function(req,res){
    res.send("Hello World");
})
router.post('/receive',async function(req,res){
    const data = req.body;
    console.log(data.inputMsg);
    // info = data.inputMsg;
    // console.log(info);
    const txn = await instance.store(data.inputMsg);
    console.log(txn);
    // res.send(info);
    res.json(txn);
})

router.get('/provide',async (req,res)=>{
  // console.log(info);
  // res.json(info);
  const result = await instance.retrieve();
  console.log(result);
  res.json(result);
})

export default router;