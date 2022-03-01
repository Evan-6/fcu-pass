let color_list = [
  "rgba(248, 202, 18, 1)",
  "rgba(0, 107, 86, 1)",
  "rgba(0, 167, 222, 1)",
  "rgba(0, 108, 146, 1)",
  "rgba(122, 78, 155, 1)",
  "rgba(213, 128, 178, 1)",
  "rgba(226, 116, 16, 1)",
];
let d = new Date();
let day = d.getDay();
let month = d.getMonth() + 1;
let date = d.getDate();

window.onload = function () {
  document.getElementById("dot").style.backgroundColor = color_list[day];
  document.getElementById("date").innerHTML =
    ("0" + month).slice(-2) + "/" + ("0" + date).slice(-2);
  if (checkName() == true) {
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    if (
      localStorage.getItem("name") == "Rick" ||
      localStorage.getItem("name") == "rick"
    ) {
      rickMode();
    } else {
      document.getElementById("dot").className = "dot";
    }
  } else {
    setName();
  }
  document.getElementById("card").classList.add("is-active");
};

function checkName() {
  if (localStorage.getItem("name")) {
    return true;
  } else {
    return false;
  }
}

function setName() {
  let name;
  while (true) {
    name="謝孟言"
  localStorage.setItem("name", name);
  document.getElementById("name").innerHTML = localStorage.getItem("name");
  if (name == "Rick" || name == "rick") {
    rickMode();
  } else {
    document.getElementById("dot").className = "dot";
  }
}

function resetName() {
  document.getElementById("card").classList.remove("is-active");
  setName();
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("card").classList.add("is-active");
}

function rickMode() {
  document.getElementById("dot").className = "rick";
  var audio = new Audio("./audio/rick.m4a");
  audio.play();
}
