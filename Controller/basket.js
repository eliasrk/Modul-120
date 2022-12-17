var direction = localStorage.getItem("direction");
localStorage.getItem("von");

var fullpriceminus = document.getElementById("fullprice-");
var fullpriceplus = document.getElementById("fullprice+");
var halfminus = document.getElementById("half-");
var halfplus = document.getElementById("half+");
var fullprice = document.getElementById("fullprice");
var half = document.getElementById("half");
var fullpricecount = 0;
var halfcount = 0;
fullpriceminus.addEventListener("click", function () {
  if (fullpricecount > 0) {
    fullpricecount--;
    fullprice.innerText = "";
    fullprice.append(" : " + fullpricecount);
    console.log(fullpricecount);
    pricecalc();
  }
});

fullpriceplus.addEventListener("click", function () {
  fullpricecount++;
  fullprice.innerText = "";
  fullprice.append(" : " + fullpricecount);
  console.log(fullpricecount);
  pricecalc();
});

halfminus.addEventListener("click", function () {
  if (halfcount > 0) {
    halfcount--;

    half.innerText = "";
    half.append(" : " + halfcount);
    console.log(halfcount);
    pricecalc();
  }
});

halfplus.addEventListener("click", function () {
  halfcount++;
  half.innerText = "";
  half.append(" : " + halfcount);
  console.log(halfcount);
  pricecalc();
});
function pricecalc() {
  console.log(fullpricecount);
  var price = 0.0;
  var price2 = 0.0;
  price = 2.9 * fullpricecount * direction;
  price2 = 2.9 * halfcount * direction;
  var price3 = price + price2;
  price = price.toFixed(2);
  price2 = price2.toFixed(2);
  document.getElementById("fullTotal").innerText = price;
  document.getElementById("halfTotal").innerText = price2;
  console.log("direction " + direction);
  document.getElementById("total").innerText = price3.toFixed(2);
}
