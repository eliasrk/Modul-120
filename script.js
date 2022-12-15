function updateClock() {
  let time = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);

function rotate() {
  var element = document.getElementById("leftRight");
  element.classList.toggle("rot");
  var locationLeft = document.getElementById("locationLeft");
  var locationRight = document.getElementById("locationRight");
  var temp = locationRight.innerHTML;
  locationRight.innerHTML = locationLeft.innerHTML;

  locationLeft.innerHTML = temp;
}
const villages = [
  "Schwarzenburg",
  "Riedstätt-Kalchstätten <h4>Halt auf Verlangen</h4>",
  "Plaffeien",
  "Passelb",
  "Chrachen",
  "Parmathaux / Le Mouret",
  "La Roche - Roulin <h4>Halt auf Verlangen</h4>",
  "La Roche",
  "Hauteville",
  "Corbières",
  "Villarvolard <h4>Halt auf Verlangen</h4>",
  "Botterens <h4>Halt auf Verlangen</h4>",
  "Broc-Fabrique",
  "Broc-Village",
];
let von = "";
function setFrom(name) {
  von = name;
  console.log(von);
}
villages.forEach((name) => {
  let location = document.getElementById("locationLeft");
  let btn = document.createElement("button");
  btn.innerHTML = "<h3>" + name + "</h3>";
  btn.id = "city";
  btn.value = name;
  btn.onclick = setFrom(name);
  location.append(btn);
});
btn.addEventListener("click", function () {
  console.log(this.name);
});
