let db_userinput=[];
let db_result=[];

const userinputservice =(url)=>{


const urldata={
    id:db_userinput.length+1,
    ...url,
};
console.log(db_userinput);
db_userinput.push(urldata);
return urldata;
}

const resultservice=()=>{
  return db_result;

}

module.exports={
    userinputservice,
    resultservice
};