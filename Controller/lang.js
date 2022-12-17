console.log(123);

const getId = [
  { name: "von" },
  { name: "nach" },
  { name: "city" },
  { name: "oneway" },
  { name: "onewaybutton" },
  { name: "fullpriceClass" },
  { name: "halfClass" },
  { name: "fullpricename" },
  { name: "halfname" },
  { name: "price" },
  { name: "ticketamount" },
  { name: "totals" },
  { name: "center" },
];

var Deutsch = [
  "Von",
  "Nach",
  "Deutsch",
  "Fahrkarten für die erste Klasse",
  "Fahrkarten der zweiten Klasse",
  "(Halt auf Verlangen)",
  "einseitig",
  "zurück",
  "mehrfach",
  "Fahrkarten der zweiten Klasse",
];
var English = [
  "From",
  "To",
  "German",
  "First class tickets",
  "second class tickets",
  "(stop on demand)",
  "one-way",
  "back",
  "multiple",
  "second class tickets",
];

var Francais = [
  "De",
  "To",
  "Allemand",
  "Billets de première classe",
  "billets de seconde classe",
  "arrêt sur demande",
  "aller simple",
  "retour",
  "multiple",
  "billets de seconde classe",
];

//flag equals the language in local storage
var flag = localStorage.getItem("language");
//if flag is not set then set it to english
if (flag === null) {
  flag = "En";
  localStorage.setItem("language", flag);
}
//if flag is english then set the language to english
if (flag === "En") {
  english("von", English[0]);
  english("nach", English[1]);
  if (location.href.includes("basket.html")) {
    english("fullpricename", English[3]);
    english("halfname", English[4]);
  }
  english("language", English[2]);
  english("oneway", English[6]);
}
//if flag is german then set the language to german
if (flag === "De") {
  german("von", Deutsch[0]);
  german("nach", Deutsch[1]);
  german("language", Deutsch[2]);
  german("fullpriceClass", Deutsch[3]);
  german("halfClass", Deutsch[4]);
  german("fullpricename", Deutsch[5]);
  german("halfname", Deutsch[5]);
  german("oneway", Deutsch[6]);
}

function french(id, word) {
  //if check if id exists
  if (id !== null) {
    document.getElementById(id).innerHTML = word;
  }
}
function german(id, word) {
  document.getElementById(id).innerHTML = word;
}
function english(id, word) {
  document.getElementById(id).innerHTML = word;
}
if (flag === "") {
  french("von", Francais[0]);
  french("nach", Francais[1]);
  french("language", Francais[2]);
  french("fullpriceClass", Francais[3]);
  french("halfClass", Francais[4]);
  french("fullpricename", Francais[5]);
  french("halfname", Francais[5]);
  french("oneway", Francais[6]);
}
getParams();
//get parameters from url and set them to local storage
function getParams() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var von = url.searchParams.get("von");
  var nach = url.searchParams.get("nach");
  var direction = url.searchParams.get("direction");
  console.log(von);
  console.log(nach);
  localStorage.setItem("von", von);
  localStorage.setItem("nach", nach);
  localStorage.setItem("direction", direction);
}
