const boring = document.getElementById("boring");
let index = 0;
function nextDay() {
  if (index == 0) {
    boring.style = `transform: translateX(1.65rem);`;
    index++;
  } else {
    boring.style = `transform: translateX(0);`;
    index--;
  }
}
