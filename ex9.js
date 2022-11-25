function Num(arr,value)
{
    let result;
    let x=0;
    let dist=[];
    for(var i=0;i<arr.length;i++)
    {
        if(value==arr[i])
        {
            x=i;
        }
    }

    for(var i=0;i<arr.length;i++)
    {
       if(arr[i]>value)
       {
         var temp1=Math.abs(x-i);
         dist.push(temp1);
       }
    }
    let temp;
    for(var i=0;i<dist.length-1;i++)
    {
      temp=Math.min(...dist);
    }
    result=arr[temp+x];
    console.log(result);
}

var ar=[1,4,3,2,5,7];
Num(ar,2);