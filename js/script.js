function looping(startNum,endNum,breakNum,continueNum){
    if(startNum == undefined || endNum==undefined || breakNum == undefined || continueNum ==undefined){
        console.log("Please Enter all the parameters numbers");
    }
    else{
        for (var number = startNum; number <= endNum; number++) {
           if(number == breakNum){
                console.log(number);
                break;
           }else if(number == continueNum){
               console.log(number);
               continue;
           }
           else{
               console.log(number);
           }
            
        }
    }
}
looping(1,10,10,4)