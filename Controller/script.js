function updateClock() {
  let time = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = time;
}

const villages = [
  { name: "Schwarzenburg" },
  { name: "Riedstätt-Kalchstätten", halt: "(Halt auf Verlangen)" },
  { name: "Plaffeien" },
  { name: "Passelb" },
  { name: "Chrachen" },
  { name: "Parmathaux / Le Mouret" },
  { name: "La Roche - Roulin ", halt: "(Halt auf Verlangen)" },
  { name: "La Roche" },
  { name: "Hauteville" },
  { name: "Corbières" },
  { name: "Villarvolard ", halt: "(Halt auf Verlangen)" },
  { name: "Botterens ", halt: "(Halt auf Verlangen)" },
  { name: "Broc-Fabrique" },
  { name: "Broc-Village" },
];

setInterval(updateClock, 1000);

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

  if (nach === null && von === null) {
    createStops("locationLeft", "von");
    reselectLocation("locationRight");
  }
  if (von) {
    document.getElementById("von").innerHTML = von;
    cleardiv();
    reselectLocation("locationLeft");
    reselectLocation("locationRight");
  }
  if (nach) {
    document.getElementById("nach").innerHTML = nach;
    cleardiv();
    reselectLocation("locationLeft");
    reselectLocation("locationRight");
  }
}

function cleardiv() {
  document.getElementById("locationRight").innerHTML = "";
  document.getElementById("locationLeft").innerHTML = "";
}
//rotate button that swaps to and from names
function rotate() {
  var element = document.getElementById("leftRight");
  element.classList.toggle("rot");
  from = document.getElementById("von").innerText;
  to = document.getElementById("nach").innerText;

  if (from != "Von" && to == "Nach") {
    document.getElementById("von").innerText = "Von";
    to = document.getElementById("von").innerText;
    cleardiv();
    createStops("locationLeft", "von");
    reselectLocation("locationRight");
  }
  if (to != "Nach" && from == "Von") {
    document.getElementById("nach").innerText = "Nach";
    from = document.getElementById("nach").innerText;
    cleardiv();

    reselectLocation("locationLeft");
    reselectLocation("locationRight");
  }
  if (to != "Nach" && from != "Von") {
    document.getElementById("von").innerText = to;
    document.getElementById("nach").innerText = from;
    cleardiv();

    reselectLocation("locationLeft");
    reselectLocation("locationRight");
  }
}
1;

// creating all the cities
function createStops(currentSide, id) {
  for (var i = 0; i < villages.length; i++) {
    document.getElementById("onewaybutton").innerHTML = " ";
    //create buttons for each city

    var location = document.getElementById(currentSide);
    var btn = document.createElement("button");

    //append the halt if it exists

    if (villages[i].halt) {
      var stopping = "<h4>" + villages[i].halt + "</h4>";
    } else {
      stopping = "";
    }

    //add the name and halt as text to button
    btn.innerHTML = "<h3>" + villages[i].name + "</h3>" + stopping;
    btn.id = "city";
    btn.value = villages[i].name;
    location.append(btn);
    //check if clicked then set value of address
    btn.addEventListener("click", function () {
      // Output the button's value to the 1
      document.getElementById(id).innerText = this.value;
      if (id === "nach") {
        cleardiv();
        reselectLocation("locationLeft");
        reselectLocation("locationRight");
        var von = document.getElementById("von").innerText;
        localStorage.setItem("von", von);
        var nach = document.getElementById("nach").innerText;
        console.log(nach);
        localStorage.setItem("nach", nach);
        console.log(localStorage.getItem("nach"));
        createOneWayTwoMulti();
      } else {
        cleardiv();
        createStops("locationRight", "nach");
        reselectLocation("locationLeft");
      }
    });
  }
}

function reselectLocation(currentSide) {
  document.getElementsByClassName("newcity").innerHTML = " ";
  let location = document.getElementById(currentSide);
  var button = document.createElement("button");
  button.innerText = "from";
  button.id = "city";
  button.className = "newcity";
  location.append(button);
  button.addEventListener("click", function () {
    if (currentSide === "locationRight") {
      cleardiv();
      createStops("locationRight", "nach");
      reselectLocation("locationLeft");
    } else {
      cleardiv();
      createStops("locationLeft", "von");
      reselectLocation("locationRight");
    }
  });
}

//create 3 buttons for one way return and multi
function createOneWayTwoMulti() {
  var value = ["einseitig", "zurück", "mehrfach"];
  for (var i = 0; i < 3; i++) {
    let location = document.getElementById("onewaybutton");
    var oneWay = document.createElement("button");

    oneWay.innerText = value[i];
    oneWay.id = "oneway";
    oneWay.value = i + 1;

    location.append(oneWay);

    oneWay.addEventListener("click", function () {
      getTown();
      1;
      var direction = this.value;
      localStorage.removeItem("direction");
      1;
      var change = true;
      checkDifference();
      if (change === true) {
        window.location.href = "basket.html";
      }
    });
  }
}

//get the town from villages and determine the difference between the two
function getTown() {
  var von = document.getElementById("von").innerText;
  var nach = document.getElementById("nach").innerText;

  localStorage.setItem("von", von);
  localStorage.setItem("nach", nach);
  var vonIndex = villages.findIndex((x) => x.name === von);
  var nachIndex = villages.findIndex((x) => x.name === nach);
  var difference = Math.abs(nachIndex - vonIndex);
  localStorage.setItem("difference", difference);
}
//function that checks that difference is not 0
function checkDifference() {
  var difference = localStorage.getItem("difference");
  if (difference === 0) {
    alert("Bitte wählen Sie zwei verschiedene Orte aus");
    var change = false;
  }
}

//check if the button with french is clicked and change the url parameter to french
function french() {
  var language = "fr";
  localStorage.setItem("language", language);
}
//check if the button with id of lang is clicked and change the url parameter to whatever the inner text is

var language = document.getElementById("English");
console.log(language);
language.addEventListener("click", function () {
  localStorage.setItem("language", "En");
  console.log("En");
});

var language = document.getElementById("German");
console.log(language);
language.addEventListener("click", function () {
  localStorage.setItem("language", "De");
  console.log("De");
});

var language = document.getElementById("French");
console.log(language);
language.addEventListener("click", function () {
  localStorage.setItem("language", "Fr");
  console.log("Fr");
  console.log(23123);
});

document.getElementsByClassName("Stops");
//event listener for the button with id of Stops
document.getElementById("Stops").addEventListener("click", function () {
  //change the url to index.html
  window.location.href = "index.html";
});
