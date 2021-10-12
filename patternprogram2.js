// let n =5, i,j
// for(i=1;i<=n;i++){
//     s = ""
//     for(j=1;j<=i;j++){
//         s=s+" 1"
//     }
//     console.log(s)
// }


// 1
// 12
// 123

// let n =5, i,j
// for(i=1;i<=n;i++){
//     s = ""
//     for(j=1;j<=i;j++){
//         s=s+j+" "
//     }
//     console.log(s)
// }

// 1
// 22
// 333
// let n =5, i,j
// for(i=1;i<=n;i++){
//     s = ""
//     for(j=1;j<=i;j++){
//         s=s+i+" "
//     }
//     console.log(s)
// }

// 1
// 23
// 456
// let n = 5,i,j,count=1,s=""
// for(i=1;i<=n;i++){
//     s=""
//     for(j=1;j<=i;j++){
//         s=s+count+" ";
//         count++
//     }
//     console.log(s)
// }

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// let n = 5, i,j
// for(i=n;i>=1;i--){
//     s=""
//     for(j=n;j>=i;j--){
//         s=s+i+" "
//     }
//     console.log(s)
// }


// 5
// 4 5
// 3 4 5
// let n =5, i
// for(i=n;i>=1;i--){
//     s = ""
//     for(j=i;j<=n;j++){
//         s=s+j+" "
//     }
//     console.log(s)
// }

// 0 
// 1 0 
// 1 0 1
// 0 1 0 1 
// 0 1 0 1 0
// let n =5,i,j,count = 1
// for(i=1;i<=n;i++){
//     s = ""
//     for(j=1;j<=i;j++){
//         if(count%2==0){
//             s=s+1+" "
//         }
//         else{
//             s=s+0+" "

//         }
//         count++
//     }
//     console.log(s)
// }

// let n =5,i,j,count = 1
// for(i=n;i>=1;i--){
//     s = ""
//     for(j=i;j<=n;j++){
//         if(count%2==0){
//             s=s+1+" "
//         }
//         else{
//             s=s+2+" " 
//         }
//         count++
//     }
//     console.log(s)
// }


let n=5,i,j
for(i=1;i<=n;i++){
    s=""
    for(j=1;j<=n;j++){
        if(i==0 || i == n-1 ){
           s=s+"*"
        }
        else{ 
            if(j==0 || j==n-1){
            s=s+"*"
            }
        }
    }
    console.log(s)
}