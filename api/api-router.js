import {Router} from "express";
const router = Router();
let info;
router.get('/',function(req,res){
    res.send("Hello World");
})
router.post('/receive',function(req,res){
    const data = req.body;
    console.log(data.inputMsg);
    info = data.inputMsg;
    console.log(info);
    res.send(info);
})

router.get('/provide',(req,res)=>{
  console.log(info);
  res.json(info);
})

export default router;