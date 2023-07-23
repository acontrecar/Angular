function addNumers(a: number, b: number): number {
  return a + b;
}

const addNumersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiplyNumbers(a: number, b?: number, base: number = 2): number {
  return a * base;
}

// const result: number = addNumers(1, 2);
// const result2: string = addNumersArrow(1, 2);
// const multiplyResult: number = multiplyNumbers(2, 2);

// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, healX: number): void => {
  character.hp += healX;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

strider.showHp();

healCharacter(strider, 20);

strider.showHp();

export {};
