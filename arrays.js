var arr=[1,2,3,4]
for(let num of arr)
{
    console.log(num)
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]*=arr[i])
}
for(let j=0;j<arr.length;j++)
{
    if(arr[j]%2==0)
        console.log(arr[j])
}