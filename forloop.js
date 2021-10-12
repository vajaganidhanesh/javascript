// first 100 natural number
let n = 100
for(i=1;i<=n;i++){
    //console.log(i)
}

// even between 2 numbers
let  b= 10
for(i=1;i<=b;i++){
    if(i%2==0){
        //console.log(i)
    }
}

// count of all odd numbers from1 to  100
let n1 = 100,count = 0
for(i=1;i<=n1;i++){
    if(i%2!=0){
        count++
    }
}
console.log(count)

// sum of all even numbers from 1 to 100
let  last = 10,sum = 0
for(i=1;i<=last;i++){
    if(i%2==0){
        sum = sum+i
    }
}
console.log(sum)

//table of a number
let num = 5,n2=10
for(i = num;i<=num*n2;i++)
    if(i%5==0){
        console.log(i)
    }

// check if the number is prime r not
let num_1 = 12,count_1 = 0
for(i=1;i<=num_1;i++){
    if(num_1%i==0){
        count_1++
    }
}
if(count_1 ==2){
    console.log('prime')
}else{
    console.log('not a prime')
}

// factorial of a number
let num_2=20
for(i=1;i<=num_2;i++){
    if(num_2%i==0){
        console.log(i)
    }
}

// reverse order of the numbers from 1 to 100
let num_3 = 100
for(i=num_3;i>=1;i--){
   // console.log(i)
}

// 
let num_4 = 20
for(i=0;i<=num_4;i++){
    if(num_4%i==0){
        if(i*i==num_4){
            console.log(i)
        }
    }
}   