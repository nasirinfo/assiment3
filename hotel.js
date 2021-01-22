function hotelCost(totalday) {
    var totalCost= 0;
    if (totalday < 0) {
        return "Ammount cannot be zero";
          }
    else if (totalday<= 10 && totalday>0) {
         totalCost=totalday*100;
         return totalCost;
         }
    else if (totalday> 10 && totalday<= 20){
        totalCost=(10*100)+((totalday-10)*80);
        return totalCost;
               }
     else{
         totalCost=(10*100)+(10*80)+((totalday-20)*50);
         return totalCost;
     }          
    
}
var totalday=21;
var totalCost=hotelCost(totalday);
console.log("Total hotel cost:",+totalCost);