const express=require('express');
const app=express();
const router1=require('./routers/user-input-router');

app.use(express.json());
app.use('/UrlScanner',router1);

app.listen(3000,()=>{
    console.log("Server running on 3000");
});