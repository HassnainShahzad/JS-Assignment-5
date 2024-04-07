let cityList = document.querySelectorAll(".city_list li"),
  buttons = document.querySelectorAll(".button"),
  outputText = document.querySelector(".output_p"),
  alertBtn = document.querySelector(".alert-btn"),
  input = document.querySelector(".input"),
  cities = [];

let firstCity = document.querySelector(".city_list li:nth-child(2)");
cities.push(firstCity.innerText);
function perform(value) {
  if (value === "clear_output") {
    outputText.innerHTML = ``;
  } else if (value === "clear_input") {
    input.value = ``;
  } else if (value === "lowercase") {
    if (input.value === "") {
      alert("Input field is empty");
      return;
    }
    outputText.innerHTML = input.value.toLowerCase();
  } else if (value === "uppercase") {
    if (input.value === "") {
      alert("Input field is empty");
      return;
    }
    outputText.innerHTML = input.value.toUpperCase();
  } else if (value === "capitalize") {
    if (input.value === "") {
      alert("Input field is empty");
      return;
    }
    lowerCaseVal = input.value.toString().toLowerCase();
    outputText.innerHTML =
      lowerCaseVal.charAt(0).toUpperCase() + lowerCaseVal.slice(1);
  } else if (value === "btrFormatting") {
    if (input.value === "") {
      alert("Input field is empty");
      return;
    }
    outputText.innerHTML = input.value.replace(/\s/g, " ");
  } else if (value === "print_all") {
    outputText.innerHTML = cities.join(" <br> ");
  } else if (value === "add_city") {
    if (input.value === "") {
      alert("Please enter a City in the input field");
      return;
    }
    li = document.createElement("li");
    lowerCaseVal = input.value.toString().toLowerCase();
    CapitalizeVal =
      lowerCaseVal.charAt(0).toUpperCase() + lowerCaseVal.slice(1);
    li.innerText = `I love my city ${CapitalizeVal}.`;
    cities.push(li.innerText);
    outputText.innerHTML = cities.join(" <br> ");
    input.value = "";
  } else if (value === "checkCity") {
    if (input.value === "") {
      alert("Please enter a City in the input field");
      return;
    }
    lowerCaseVal = input.value.toString().toLowerCase();
    CapitalizeVal =
      lowerCaseVal.charAt(0).toUpperCase() + lowerCaseVal.slice(1);
    if (cities.includes(`I love my city ${CapitalizeVal}.`)) {
      outputText.innerHTML = `City ${CapitalizeVal} is in the list`;
    } else {
      outputText.innerHTML = `City <b>"${CapitalizeVal}"</b> is not in the list`;
    }
  } else if (value === "findWord") {
    if (input.value === "") {
      alert("Please enter a word in the input field");
      return;
    }
    let word = input.value;
    let count = 0;
    cities.forEach((city) => {
      if (city.includes(word)) {
        count++;
      }
    });
    outputText.innerHTML = `The word <b>"${word}"</b> is found ${count} times.`;
  } else if (value === "replaceWord") {
    if (input.value === "") {
      alert("Please enter a word in the input field");
      return;
    }
    let word = input.value;
    let newWord = "(_Replaced Word_)";
    cities.forEach((city, index) => {
      if (city.includes(word)) {
        cities[index] = city.replace(word, newWord);
      }
    });
    outputText.innerHTML = cities.join(" <br> ");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => perform(e.target.dataset.value));
});
