var arr=[1,2,3,4]
// for(let num of arr)
// {
//     console.log(num)
// }
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]*=arr[i])
// }
// for(let j=0;j<arr.length;j++)
// {
//     if(arr[j]%2==0)
//         console.log(arr[j])
// }
// let str1="welcome to the college";
// let str2="MREC";
// console.log("the count of length",str1.length)
// console.log(str1[6])
// console.log("uppercase:",str1.toUpperCase())
// console.log("lowercase:",str1.toLowerCase())
// console.log(str1.concat(str2))
// console.log(str1.trim())//remove starting and ending spaces
// console.log(str2.replace("MREC","campus"))
// console.log(str1.charAt(0))//particular index element
// console.log(str1.slice(0,8))//upto the particular indexes
// console.log(str1.slice(-15,-7))//indexes from back
// console.log(str1.replaceAll("welcome to the college","hello"))//replace all for particular input
// console.log(str1)


function f1(a){
    console.log("hello",a)
}
f1(4)

function f2(a,b){
    console.log(a*b)
}
f2(6,7)


function f3(a,b){
    return a*b
}
console.log(f3(6,8))

let person={name:"hero",age:"18"};
console.log(person["age"]);
console.log(person.name);
let result="";
for(let [que,ans] of Object.entries(person))
{
    result+= que + ":" + ans ; 
}
console.log(result)
