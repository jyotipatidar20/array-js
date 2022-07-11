a=[1,4,7,"jyoti"," sapna","nikhat",9,6]
var stringlist=[]
var stringlist1=[]
a.forEach(element => {
    if(typeof(element)==="string"){
        stringlist.push(element)
    }
    else{
        stringlist1.push(element)
    }
});
console.log(stringlist)