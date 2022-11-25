function rect(value){
    var l = 0;
    for(var i=0;i<value.length;i++){  
        var temp =value[i];
        if(l<temp.length){
            l=temp.length;     /* assigning length of the longest string in the list */
        }
    }
    for(var j=0;j<l+6;j++)
    {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
    for(var i=0;i<value.length;i++)
    {
        var temp =value[i]
       if(l==temp.length)
       {
        process.stdout.write("*  "+temp+"  *");
       }
       else
       {
        process.stdout.write("*  "+temp);
        for(var j=temp.length;j<l;j++)
        {
            process.stdout.write(" ");
        }
        process.stdout.write("  *");
       }
       process.stdout.write("\n");
    }

    for(var j=0;j<l+6;j++)
    {
        process.stdout.write("*");
    }
}

var arr =["hello","world","in","a","frame"];
rect(arr);