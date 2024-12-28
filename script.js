const setInput = document.querySelector(".set_input");

setInput.value = 0;

function display(event) {
  try {
    if (setInput.value == "0" && event.target.textContent != ".") {
      setInput.value = "";
    }
    setInput.value += event.target.textContent;
  } catch (error) {
    console.error(error);
  }
}

function reset() {
  setInput.value = 0;
}

function solve() {
  try {
    if (setInput.value.includes("/0")) {
      throw new Error("Error");
    }
    setInput.value = Number(eval(setInput.value));
  } catch (error) {
    setInput.value = "Error";
  }
}
