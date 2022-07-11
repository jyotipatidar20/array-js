a=[1,2,[3,4],5,[6,7],8,9]
// var i=0
// var sum=0
// while (i<a.length){
//     var j=0
//     while (j<a.length[i]){
//       c=(a[i][j])
//         sum=sum+c
//         j++
//     }
       
    
//         i++
// }
// console.log(sum)




var i=0
var sum=0
for (i of a){
  b=i
  if (typeof(b)=="object"){
    for ( j of b){
      sum=sum+j
  }
  } else{
          sum=sum+b
  }
}
console.log(sum)










// var sum=0
// for (var i=0;i<a.length;i++){
//     for (j=0;j<a.length[i];j++){
//         sum=sum+a[i][j]
//     }

// }
// console.log(sum)
















