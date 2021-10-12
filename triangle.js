console.clear() 
// let a = 60,b=60,c =60
// if(a>0 && b>0 && c>0 && a+b>=c && a+c>=b && b+c>=a){
//     if(a==b && a==c){
//         console.log("Equilateral triangle")
//     }
//     else if(a!=b && b!=c && c!=a){
//         console.log("scalane triangle")
//     }
//     else if(a==b || b==c || c==a){
//         console.log("Isolated triangle")
//     }
// }

let number = 343, rev = 0,sum = 0
let temp = number;
while(number>0){
    rev=number%10
    sum=(sum*10)+rev;
    number=parseInt(number/10)
}
if(temp == sum){
    console.log(`${sum} is palidrome`)
}
else{
    console.log(`${sum} is not a palidrome`)
} 