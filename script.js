function updateClock() {
  let time = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);
function rotate() {
  var element = document.getElementById("leftRight");
  element.classList.toggle("rot");
  voninner = document.getElementById("von").innerText;
  nachinner = document.getElementById("nach").innerText;

  if (voninner != "Von" && nachinner == "Nach") {
    document.getElementById("von").innerText = "Von";
    nachinner = document.getElementById("von").innerText;
  }
  if (nachinner != "Nach" && voninner == "Von") {
    document.getElementById("nach").innerText = "Nach";
    voninner = document.getElementById("nach").innerText;
  }
  if (nachinner != "Nach" && voninner != "Von") {
    document.getElementById("von").innerText = nachinner;
    document.getElementById("nach").innerText = voninner;
  }
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

createStops("locationLeft", "von", von);

let state = false;
// creating all the cities
function createStops(currentSide, id, toFrom) {
  for (var i = 0; i < villages.length; i++) {
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
      toFrom = this.value;
      var cities = document.getElementById(id);
      cities.innerText = toFrom;
      if (id == "von") {
        document.getElementById(currentSide).innerHTML =
          "<h1 id='von'></h1><div id=" + currentSide + "></div>";
        createStops("locationRight", "nach", nach);

        var element = document.getElementById("locationRight");
        element.classList.remove("newcity");
        newcreateStops(currentSide);
      } else {
        document.getElementById(currentSide).innerHTML =
          "<h1 id='von'></h1><div id=" + currentSide + "></div>";

        var element = document.getElementById("locationLeft");
        element.classList.remove("newcity");
        newcreateStops(currentSide);
      }
    });
  }
}

function newcreateStops(currentSide, id, toFrom) {
  var location = document.getElementById(currentSide);
  var button = document.createElement("button");
  button.innerText = "ahjs";
  button.id = "city";
  button.className = "newcity";
  location.append(button);
  button.addEventListener("click", function () {
    var element = document.getElementById(currentSide);
    element.classList.remove("newcity");
    document.getElementById(currentSide).innerHTML =
      "<h1 id='von'></h1><div id=" + currentSide + "></div>";
    createStops(currentSide, id, toFrom);
  });
}
