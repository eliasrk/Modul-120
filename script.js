function updateClock() {
  let time = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);

function rotate() {
  var element = document.getElementById("leftRight");

  element.classList.toggle("rot");
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

let von = "";
createStops("locationLeft", "von", von);

let state = false;
// creating all the cities
function createStops(locat, id, toFrom) {
  for (var i = 0; i < villages.length; i++) {
    //create buttons for each city
    let location = document.getElementById(locat);
    let btn = document.createElement("button");
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
      // Output the button's value to the console
      toFrom = this.value;
      let cities = document.getElementById(id);
      cities.innerText = toFrom;
      console.log(id);
      if (id == "von") {
        document.getElementById("locationLeft").remove();
        let nach = "";
        createStops("locationRight", "nach", nach);
      } else {
        document.getElementById("locationRight").remove();
      }
      state != state;
      rotate();
    });
  }
}
