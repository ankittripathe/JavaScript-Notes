// Add friend Freature with same Button
var estatus = document.querySelector("h5");
var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    estatus.innerHTML = "Friends";
    estatus.style.color = "green";
    btn.innerHTML = 'Remove Friends'
    check = 1
  } else {
    estatus.innerHTML = "Stranger";
    estatus.style.color = "red";
    btn.innerHTML = 'Add Friends'
    check = 0
  }
});