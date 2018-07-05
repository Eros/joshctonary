function joshIt(word, strength) {
    if (word === undefined) return;
    const length = word.length;
    const letters = word.split("");
    for (let index = 0; index < length; index++) {
      const element = letters[index];
      if (element === "" || element === " ") {
        continue;
      }
      const rand = Math.random();
      if (rand <= strength) {
        let randIndex = this.getRandomInt(0, length);
        let temp = letters[randIndex];
        while (temp === "" || temp === " ") {
          randIndex = this.getRandomInt(0, length);
          temp = letters[randIndex];
        }
        letters[randIndex] = element;
        letters[index] = temp;
      }
    }

    return letters.join("").trim();
}