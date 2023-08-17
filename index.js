const vehicleType = "bike";
let parkingFee;

switch (vehicleType){
    case "bike" :
    parkingFee = 5
    break;
    case "car" :
    parkingFee = 10
    break;
    case "truck" :
    parkingFee = 15
    break;
    
}

console.log(`The parking fee for this vehicle is ${parkingFee}.`);