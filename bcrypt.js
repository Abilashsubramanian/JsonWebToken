//BCRYPT
const bcrypt=require('bcrypt')
const saltRound=10



bcrypt.hash("Abilash",saltRound,(err,hasedData)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(hasedData);
    }
})
const hasedPass="$2b$10$fEgQqWLhWsQBKe5tBlc4YuHD8RfgJrvLlJaFtKi3ZjzSslMHyOfDe"

bcrypt.compare("Abilash",hasedPass,(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        if(result) console.log("password matched");
        else console.log("password are not matching")
    }
})
