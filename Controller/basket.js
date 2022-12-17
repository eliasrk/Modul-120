localStorage.getItem("direction");
localStorage.getItem("von");
console.log(localStorage.getItem("direction"));
console.log(localStorage.getItem("von"));

var firstminus = document.getElementById("first-");
var firstplus = document.getElementById("first+");
var secondminus = document.getElementById("second-");
var secondplus = document.getElementById("second+");
var first = document.getElementById("first");
var second = document.getElementById("second");
var firstcount = 0;
var secondcount = 0;
firstminus.addEventListener("click", function () {
  if (firstcount > 0) {
    firstcount--;
    first.innerText = "";
    first.append(" : " + firstcount);
    console.log(firstcount);
  }
});

firstplus.addEventListener("click", function () {
  firstcount++;
  first.innerText = "";
  first.append(" : " + firstcount);
  console.log(firstcount);
});

secondminus.addEventListener("click", function () {
  if (secondcount > 0) {
    secondcount--;

    second.innerText = "";
    second.append(" : " + secondcount);
    console.log(secondcount);
  }
});

secondplus.addEventListener("click", function () {
  secondcount++;
  second.innerText = "";
  second.append(" : " + secondcount);
  console.log(secondcount);
});

function pricecalc() {}
