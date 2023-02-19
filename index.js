import charData from "./data.js";

function Character(data) {
  Object.assign(this, data);

  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceRoll, diceCount } = this;
    const diceHtml = this.getDiceHtml(diceCount);

    return `<div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">
        ${diceHtml}
      </div>
      </div>
    `;
  };

  this.getDiceHtml = (diceCount = this.diceCount) => {
    return getDiceRollArray(diceCount)
      .map((dice) => `<div class="dice">${dice}</div>`)
      .join("");
  };
}

function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

function render() {
  for (const character in charData) {
    const newCharacter = new Character(charData[character]);
    document.getElementById(newCharacter.elementId).innerHTML =
      newCharacter.getCharacterHtml();
  }
}

render();
