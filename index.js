//const jwt=require("jsonwebtoken")

const securityKey="Abilash"

const user={name:"Dhoni",address:"chennai"}
//generate token
const token=jwt.sign(user,securityKey,{expiresIn:30})
console.log(token)

//verify token
const jwt_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGhvbmkiLCJhZGRyZXNzIjoiY2hlbm5haSIsImlhdCI6MTcxMTM1MDc0MCwiZXhwIjoxNzExMzUwNzcwfQ.WIUcSBidF1spsxbgm9zf35V7ElI58neiLEGGwXnpJEg"

let data=jwt.verify(jwt_token,securityKey,(err,data)=>{
    if(err){
        console.log("token expired")
    }
    else{
        return data
    }

})
console.log(data);

