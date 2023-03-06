import Character from "./Character.js";
import characterData from "./data.js";

function attack() {
  console.log("attack");
}

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

render();
