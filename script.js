window.addEventListener("DOMContentLoaded", (event) => {
  const btnSave = document.getElementById("salva");
  btnSave.onclick = salva;
  const btnDelete = document.getElementById("elimina");
  btnDelete.onclick = elimina;
  const displayName = document.getElementById("nomeSalvato");
  const nameSave = localStorage.getItem("nome");
  displayName.innerText = nameSave;
  count();
});
const salva = () => {
  const name = document.getElementById("nome");
  localStorage.setItem("nome", name.value);
  const displayName = document.getElementById("nomeSalvato");

  displayName.innerText = name.value;
};
const elimina = () => {
  localStorage.removeItem("nome");
  const displayName = document.getElementById("nomeSalvato");

  displayName.innerText = "";
};

const count = () => {
  intervalID = setInterval(function () {
    let counter = 0;
    const p = document.getElementById("contatore");
    const exCount = sessionStorage.getItem("counter");
    if (exCount) {
      counter = exCount;
    }
    p.innerText = counter;
    counter++;
    sessionStorage.setItem("counter", counter);
  }, 1000);
};
