function updateClock() {
  let time = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);

function myFunction() {
  var element = document.getElementById("leftRight");
  element.classList.toggle("rotate");
}
