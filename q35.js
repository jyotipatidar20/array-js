 var magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
]
 var i=0
 var v=15
while (i<magic_square.length){
     var row=0
     var c=0 
     var sum=0
    while (i<magic_square.length){
            c=c+(magic_square[row][row])
            row=row+1
    sum=sum+c
    i=i+1
 }
console.log(i,"rows",sum)
}
var j=0
while (j<magic_square.length){
     var col=0
     var k=0
     var sum1=0
    while (col<magic_square.length){
        k=k+(magic_square[j][col])
        col=col+1
    sum1=sum1+k
    j=j+1
    }
console.log( i,"columns",sum1)
    }
 var x=magic_square[0][0]+magic_square[1][1]+magic_square[2][2]
 var y=magic_square[0][2]+magic_square[1][1]+magic_square[2][0]
if (x==v) {
     if(y==v){
         var d=x+y
        console.log(d,"diagonal")
        if (sum==sum1==d){
            console.log("it is a magic square")}
        else{
            console.log("not a magic square")}
        }
}
