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

function rotate() {
  var element = document.getElementById("leftRight");
  element.classList.toggle("rot");
  from = document.getElementById("von").innerText;
  to = document.getElementById("nach").innerText;

  if (from != "Von" && to == "Nach") {
    document.getElementById("von").innerText = "Von";
    to = document.getElementById("von").innerText;
  }
  if (to != "Nach" && from == "Von") {
    document.getElementById("nach").innerText = "Nach";
    from = document.getElementById("nach").innerText;
  }
  if (to != "Nach" && from != "Von") {
    document.getElementById("von").innerText = to;
    document.getElementById("nach").innerText = from;
  }
}
var nav = true;
// creating all the cities
function createStops(currentSide, id) {
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
    document.getElementsByClassName("newcity").innerHTML = " ";
    location.append(btn);

    let cities = document.getElementById(id);
    //check if clicked then set value of address
    btn.addEventListener("click", function () {
      // Output the button's value to the 1
      cities.innerText = this.value;
      if (nav === false) {
        document.getElementById("locationRight").innerHTML = "";
        nav = false;
        createStops("locationLeft", "von");
        reselectLocation("locationRight");
        nav = true;
        return console.log("hello1");
      } else {
        document.getElementById("locationLeft").innerHTML = "";
        nav = true;
        createStops("locationRight", "nach");
        reselectLocation("locationLeft");
        nav = true;
        console.log(document.getElementsByClassName("newcity"));
        console.log("hellos2");
      }
    });
  }
}

function reselectLocation(currentSide) {
  document.getElementsByClassName("newcity").innerHTML = " ";
  var location = document.getElementById(currentSide);
  var button = document.createElement("button");
  button.innerText = "from";
  button.id = "city";
  button.className = "newcity";
  location.append(button);
  button.addEventListener("click", function () {
    document.getElementById(currentSide).innerHTML = "";
    if (nav === false) {
      document.getElementById("locationRight").innerHTML = "";
      nav = false;
      createStops("locationRight", "nach");
      reselectLocation("locationLeft");
      console.log("hellos3");
      nav = true;
    } else {
      document.getElementById("locationLeft").innerHTML = "";
      nav = true;
      createStops("locationLeft", "von");
      reselectLocation("locationRight");
      console.log("hellos4");
    }
  });
}

createStops("locationLeft", "von");
reselectLocation("locationRight");
