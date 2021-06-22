
const h = new Date();
const heure = h.getHours();

const j = new Date();
const jour = j.getDay();

const workingTime = (res,req,next) =>{
    if(heure < 9 || heure > 17|| jour < 1 || jour > 5){
        console.log(" sorry can't serve your request at this time, try in working hours")
    }
    else{
        console.log("page have been send to the client")
        next();
    }
    }


module.exports = workingTime;
