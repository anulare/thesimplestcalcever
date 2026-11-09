var ekran = document.getElementById("ekran");

function dodaj(znak) {
  if (ekran.value == "0" || ekran.value == "Błąd") {
    ekran.value = "";
  }
  ekran.value = ekran.value + znak;
}

function wyczysc() {
  ekran.value = "0";
}

function oblicz() {
  try {
    var wynik = eval(ekran.value);
    if (!isFinite(wynik)) {
      ekran.value = "Błąd";
    } else {
      ekran.value = wynik;
    }
  } catch (e) {
    ekran.value = "Błąd";
  }
}
