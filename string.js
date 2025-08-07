let str1="welcome to the college";
let str2="MREC";
console.log("the count of length",str1.length)
console.log(str1[6])
console.log("uppercase:",str1.toUpperCase())
console.log("lowercase:",str1.toLowerCase())
console.log(str1.concat(str2))
console.log(str1.trim())//remove starting and ending spaces
console.log(str2.replace("MREC","campus"))
console.log(str1.charAt(0))//particular index element
console.log(str1.slice(0,8))//upto the particular indexes
console.log(str1.slice(-15,-7))//indexes from back
console.log(str1.replaceAll("welcome to the college","hello"))//replace all for particular input
console.log(str1)