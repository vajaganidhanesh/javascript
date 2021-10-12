let units = 153,bill
if(units<=50){
    bill = units*1
}
else if(units<=150){
    bill = 50+(units-50)*2
    
}
else if(units<=250){
    bill = 50+100*2+(units-150)*3
    
}
else if(units<=350){
    bill = 50*1+100*2+100*3+(units-250)*4
}
if(units>150){
    bill = bill + bill*20/100
}
console.log(bill)