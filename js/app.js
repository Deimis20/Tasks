duomenys = [
  { vardas: "Jonas", amzius: 25, miestas: "Vilnius" },
  { vardas: "Ona", amzius: 30, miestas: "Kaunas" },
  { vardas: "Arturas", amzius: 20, miestas: "Klaipeda" },
  { vardas: "Arnas", amzius: 18, miestas: "Klaipeda" },
  { vardas: "Valentinas", amzius: 43, miestas: "Vievis" },
  { vardas: "Giedrius", amzius: 32, miestas: "Taurage" },
  { vardas: "Petras", amzius: 54, miestas: "Marijampole" },
  { vardas: "Vakaris", amzius: 31, miestas: "Taurage" },
  { vardas: "Redas", amzius: 38, miestas: "Marijampole" },
  { vardas: "Regina", amzius: 41, miestas: "Utena" },
  { vardas: "Paulina", amzius: 41, miestas: "Rietavas" },
];

const section = document.createElement("section");
document.querySelector("body").appendChild(section);
for (let i = 0; i < duomenys.length; i++) {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "border");
  document.querySelector("section").appendChild(ul);
  const vardas = document.createElement("li");
  vardas.textContent = "Vardas: " + duomenys[i].vardas;
  ul.appendChild(vardas);
  const amzius = document.createElement("li");
  amzius.textContent = "Amzius: " + duomenys[i].amzius;
  ul.appendChild(amzius);
  const miestas = document.createElement("li");
  miestas.textContent = "Miestas: " + duomenys[i].miestas;
  ul.appendChild(miestas);
}

function filtras() {
  let filtras, ul, li, input;
  input = document.getElementById("paieska");
  filtras = input.value.toUpperCase();
  ul = document.getElementsByTagName("ul");
  for (let i = 0; i < ul.length; i++) {
    li = ul[i].getElementsByTagName("li");
    for (let u = 0; u < li.length; u++) {
      let amziausLi = li[u];
      let amziausTekstas = amziausLi.textContent || amziausLi.innerText;
      if (amziausTekstas.toUpperCase().indexOf(filtras) >= 0) {
        ul[i].style.display = "";
        break;
      } else {
        ul[i].style.display = "none";
      }
    }
  }
}
