// 1. Masala
function uzunlikBoyichaTeskariTartiblash(massiv) {
  return massiv.sort((a, b) => b.length - a.length);
}

// 2. Masala
function birinchiHarfniKattalashtirish(massiv) {
  let natija = [];
  for (let i = 0; i < massiv.length; i++) {
    let satr = massiv[i];
    let yangiSatr = satr.charAt(0).toUpperCase() + satr.slice(1);
    natija.push(yangiSatr);
  }
  return natija;
}

// 3. Masala
function raqamlarniOchirish(satr) {
  let natija = "";
  for (let i = 0; i < satr.length; i++) {
    if (satr[i] < "0" || satr[i] > "9") {
      natija += satr[i];
    }
  }
  return natija;
}

// 4. Masala
function satrlarniFiltrlash(massiv) {
  return massiv.filter((element) => typeof element == "string");
}

// 5. Masala
function sozlarniSanash(satr) {
  const words = str.split(" ");

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      count++;
    }
  }

  return count;
}

// 6. Masala
function uzunlikBoyichaTartiblash(massiv) {
  return massiv.sort((a, b) => a.length - b.length);
}

// 7. Masala
function unlilarniOchirish(satr) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const sum = str[i];

    switch (sum.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        break;
      default:
        result += sum;
        break;
    }
  }

  return result;
}

// 8. Masala
function engUzunSatrniTopish(arg) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }

  return max;
}

// 9. Masala
function sozlarniTeskarilash(satr) {
  return satr.split(" ").reverse().join(" ");
}

// 10. Masala
function takrorlanishlarniSanash(massiv, satr) {
  return massiv.filter((element) => element === satr).length;
}

let massiv = ["salom", "olma", "salom"];
let satr = "salom";
