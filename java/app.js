let display = "";
const buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      display = eval(display);
      document.getElementById("result").value = display;
    } else if (e.target.innerHTML === "AC") {
      display = "";
      document.getElementById("result").value = display;
    } else if (e.target.innerHTML == "C") {
      display = display.substring(0, display.length - 1);
      document.getElementById("result").value = display;
    } else {
      display = display + e.target.innerHTML;
      document.getElementById("result").value = display;
    }
  });
});
