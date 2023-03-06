console.log("Conditional Statment");
console.log("");

// Shahnaz Ferdiansyah
// BE Class

let a = 0;
if (a % 2 == 0) {
  console.log(a, `adalah ilangan Genap`);
} else if (a % 2 == 1) {
  console.log(a, `adalah bilangan Ganjil`);
} else {
  console.log(a, `adalah Nol`);
}

//nasted if yaitu if didalam if

console.log("");
console.log("");
console.log("");

let buah = "Nanas";

switch (buah) {
  case "Nanas":
    console.log("Buah tersebut ialah Nanas");
    break;
  case "Apel":
    console.log("Buah tersebut iala Apel");
    break;
  case "Jeruk":
    console.log("Buah tersebut ialah jeruk");
    break;
  default:
    console.log("Ini bukan buah");
    break;
}

console.log("");
console.log("");
console.log("");

let cuaca = "Cerah";
let WarnaSepatu = "Putih";

if (cuaca == "Cerah") {
  console.log("Sumbul akan membeli sepatu di Toko");
  if (WarnaSepatu == "Hitam") {
    console.log("Sambul akan membeli sepatu itu");
  } else if (WarnaSepatu !== "Hitam") {
    console.log("Sambul tidak akan membeli sepatu");
    console.log("tetapi dia hanya membeli kauh kaki putih");
  }
} else {
  console.log("Sambul akan membeli sepatu lewat Online");
}
