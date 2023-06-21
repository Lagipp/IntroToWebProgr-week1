import "./styles.css";

const header = document.querySelector(".h1");

const handleClick = () => {
  header.innerHTML = "My notebook";
  console.log("hello world");
};

const button = document.getElementById("my-button");
button.addEventListener("click", handleClick);

const ulist = document.querySelector(".ulist");
const addDataButton = document.getElementById("add-data");
const textArea = document.querySelector(".textarea");

addDataButton.addEventListener("click", () => {
  let newLi = document.createElement("li");
  newLi.textContent = textArea.value;
  ulist.appendChild(newLi);
  textArea.value = "";
});
