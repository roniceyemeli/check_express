
const h = new Date();
const heure = h.getHours();
const jour = h.getDay();

const workingTime = (req,res,next) =>{
    if(heure < 9 || heure > 17|| jour < 1 || jour > 5){
        console.log(" sorry can't serve your request at this time, try in working hours")
        res.send(' <h1>Sorry try in working hours </h1> ')
    }
    else{
        console.log("page have been send to the client")
        next();
    }
    }


module.exports = workingTime;
