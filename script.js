//capture du text
const input = document.getElementById("input");

//gestion du click
const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", () => {
  addLi(input.value), (input.value = "");
});

// trouver  ul
const ul = document.getElementById("tasks");

// fonction pour ajouter un element li au ul
const addLi = (input) => {
  const li = document.createElement("li");
  li.textContent = input;
  ul.prepend(li);
  li.prepend(btnDelete);
  li.prepend(btnValid);
};
