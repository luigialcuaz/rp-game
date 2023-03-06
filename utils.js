function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount = this.diceCount) {
  return new Array(diceCount)
    .fill(`<div class="placeholder-dice"></div>`)
    .join("");
}

export { getDiceRollArray, getDicePlaceholderHtml };
