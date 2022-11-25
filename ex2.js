let today= new Date();
var curHr = today.getHours();
var time;
if (curHr < 12) {
  var time = "Morning";
} 
else if (curHr < 17) {
  var time = "Afternoon";
}
else if (curHr < 21) {
  var time = "Evening";
}
else {
  var time = "Night";
}

console.log(time);
