
let num=5;
let count=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            count++
        }
    }
    
    if(count==2){   // updated code by pushkar
        console.log("Yes")
    }
    else{
        console.log("No")
    }