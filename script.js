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
    ekran.value = eval(ekran.value);
  } catch (e) {
    ekran.value = "Błąd";
  }
}
