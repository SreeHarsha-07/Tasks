let greeting = "hello";
let name = "world";
let a = greeting.concat(" ",name);
alert(a);
console.log(a);
let b = a.replace(/l/g,"1");
b = b.replace(/o/g,"0");
console.log(b);
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let reversed = reverseString(b);
console.log(reversed);
