function showSelectedCities(event) {
  console.log(event.target.value);
}

let citySelect = document.querySelector("#cities");
console.log(citySelect);
console.log(citySelect.value);

citySelect.addEventListener("change", showSelectedCities);
