const express=require('express');
const router1=express.Router();
const {userinput,result}=require('../controller/user-input-controller');
router1.post('/url_input',userinput);
router1.get('/result',result);

module.exports =router1;