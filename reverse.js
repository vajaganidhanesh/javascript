console.clear()
let n,last,rd,second,first,rn
n = 989
last = n % 10
rd = parseInt(n/10)
second = rd % 10 
first = parseInt(rd/10)
rn = last*100+second*10+first
// console.log(rn)
if(n==rn){
    console.log(`${rn} same number`)
}else{
    console.log(`${rn} not a same number`)
}
// let f = 24
// if (f%2==0)
// {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// let a = 2 ,b =5 ,c=7
// if(a>b && a>c){
//     console.log("a is greater ")
// }
// else if(b>a && b>c){
//     console.log("b is greater ")
// }else {
//     console.log("c is greater")
// }
// let a = 2, b = 5, c =7
// if(a>b){
//     if(a>c){
//         console.log("c is greater")
//     }
// }