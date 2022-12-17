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
    location.append(btn);
    //check if clicked then set value of address
    btn.addEventListener("click", function () {
      // Output the button's value to the 1
      document.getElementById(id).innerText = this.value;
      if (id === "nach") {
        cleardiv();
        reselectLocation("locationLeft");
        reselectLocation("locationRight");
        createOneWayTwoMulti();
        console.log("	1");
      } else {
        cleardiv();
        createStops("locationRight", "nach");
        reselectLocation("locationLeft");
        console.log("	2");
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
      console.log("  3");
    } else {
      cleardiv();
      createStops("locationLeft", "von");
      reselectLocation("locationRight");
      console.log("  4");
    }
  });
}

//create 3 buttons for one way return and multi
function createOneWayTwoMulti() {
  var value = ["oneWay", "return", "multi"];
  for (var i = 0; i < 3; i++) {
    let location = document.getElementById("onewaybutton");
    var oneWay = document.createElement("button");

    oneWay.innerText = value[i];
    oneWay.id = "oneway";
    oneWay.value = i + 1;
    location.append(oneWay);

    oneWay.addEventListener("click", function () {
      var direction = this.value;
      localStorage.removeItem("direction");
      localStorage.setItem("direction", direction);
      localStorage.setItem("von", "1");
      window.location.href = "basket.html";
    });
  }
}

createStops("locationLeft", "von");
reselectLocation("locationRight");
