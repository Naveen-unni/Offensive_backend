const {userinputservice,resultservice}=require('../services/user-input-service');


const userinput=async(req,res)=>{
     try{
    const url=req.body;
     const input=await userinputservice(url);
    res.status(201).json(input);
}

catch(error){

    res.status(422).json({
      success: false,
      message: error.message,
    });
}
};
const result=async(req,res)=>{
 try{ 

    const output=await resultservice();
    res.json(output);
}
catch(error){
res.status(500).json({
    success:false,
    message:error.message,
});

}};
module.exports={
    userinput,
    result
};
