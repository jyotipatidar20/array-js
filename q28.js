list =[-1,2,-3,4,-5,6,-7,8,-9]
var i=0
var b=[]
while (i<list.length){
    if (list[i]<0){
        b.push(list[-i*0])
    }else{
        b.push(list[i])
        i++
    }
    // i++
}
console.log(b)