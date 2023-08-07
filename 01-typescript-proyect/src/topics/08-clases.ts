export class Person {
  // public name: string;
  // private address: string;

  constructor(public name: string, private address: string = "No tiene") {
    this.name = name;
    this.address = address;
  }
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York, USA");
//   }
// }

export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony Stark", "New York, USA");
const ironMan = new Hero("Tony Stark", 45, "Tony", tony);

console.log(ironMan);
