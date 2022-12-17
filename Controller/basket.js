var direction = localStorage.getItem("direction");

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
  var difference = localStorage.getItem("difference");
  if (difference > 3) {
    difference = difference * 0.9;

    difference.toFixed(1);
  }
  var price = 0.0;
  var price2 = 0.0;
  price = 2.9 * fullpricecount * direction;
  if (price > 0) {
    price = price + difference;
  }
  price = Math.round(price * 100) / 100;

  price2 = 1.45 * halfcount * direction;
  if (price2 > 0) {
    price2 = price2 + difference;
  }
  price2 = Math.round(price2 * 100) / 100;
  var price3 = price + price2;

  document.getElementById("fullTotal").innerText = price;
  document.getElementById("halfTotal").innerText = price2;
  document.getElementById("total").innerText = parseFloat(price3).toFixed(2);
}

document.getElementById("Purchase").addEventListener("click", function () {
  console.log("----------------------------------");
  console.log("Purchase");
  console.log("Von=" + localStorage.getItem("von"));
  console.log("Nach=" + localStorage.getItem("nach"));
  if (fullpricecount > 0) {
    console.log("ersteKlase=" + true);
  }
  console.log("Erste klasse Anzahl=" + fullpricecount);
  console.log("Zweite klasse Anzahl=" + halfcount);
  console.log("----------------------------------");
});
