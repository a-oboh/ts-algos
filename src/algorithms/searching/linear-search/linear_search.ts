var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

//different examples of linear search

beasts.indexOf("Godzilla");

beasts.findIndex(function (item) {
  return item === "Godzilla";
});

beasts.find(function (item) {
  return item === "Godzilla";
});

beasts.includes("Godzilla");

for (let i = 0; i < beasts.length; i++) {
  if (beasts[i] == "Godzilla") {
    console.log(i);
  }
}
