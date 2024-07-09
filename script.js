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

function _clear() {
  setInput.value = 0;
}

function solve() {
  try {
    setInput.value = Number(eval(setInput.value));
  } catch (error) {
    setInput.value = "Error";
  }
}
