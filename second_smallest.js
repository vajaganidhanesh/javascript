console.clear()
let a = 100, b= 20, c=300
if(a>b && a>c){
    if(b>c){
        console.log(`${b} second largest`)
    }
    else{
        console.log(`${c} second largest`)
    }
}
else if(b>a && b>c){
    if(a>c){
        console.log(`${a} second largest`)
    }
    else{
        console.log(`${c} second largest`)
    }
}
else if(c>a && c>b){
    if(a>b){
        console.log(`${a} second largest`)
    }
    else{
        console.log(`${b} second largest`)
    }
}