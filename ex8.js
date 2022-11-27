var text = "The quick brown fox";
var myArray = text.split(" ");

function pig(myArray){
  var neww=[];
    let firstletter=myArray.charAt(0);
    
    neww=myArray.slice(1);
    neww=neww+firstletter+"ay";
    return neww;

}

console.log(myArray.map(pig));
