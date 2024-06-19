const listKhodam = [
  "Knalpot Mio",
  "Harimau",
  "Knalpot Beat Karbu",
  "Naga Mahjong",
  "Ratu catur",
  "Pion catur",
  "Wibu",
  "Soto Ayam",
  "Decul",
  "Fans Emyu",
  "Bakso Malang",
  "Terang Bulan",
  "Kakek zeus",
  "Kominfo",
  "Gibran",
  "Prabowo",
  "Jokowi",
  "Ganjar",
  "Mas Anies",
  "Es Teler",
  "AS Sekop",
  "Central Cee",
  "LIL Tecca",
  "Drake",
  "Kendrick Lamar",
  "MAXWIN (jangan report webnya)",
  "Cilok",
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const randomKhodamName = getRandomItem(listKhodam);

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nameForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      document.getElementById("their-name").textContent = name;

      var khodamNameDisplay = document.getElementById("khodam-name");
      khodamNameDisplay.textContent = randomKhodamName;

      var khodamSection = document.getElementById("khodam");
      khodamSection.classList.remove("display-none");

      document.getElementById("pengisian-data").classList.add("display-none");
    });
});
