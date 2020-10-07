// export interface Card {
//   id: string;
//   name: String;
//   imageUrl: String;
//   types: Array<String>;

// }
export interface Card {
  id: String;
  name: String;
  imageUrl: String;
  types: Array<String>;
  hp?: String;
  attacks?: Array<Attack>;
  weaknesses?: Array<Weaknesses>;
}

interface Attack {
  cost: String;
  name: String;
  damage: String;
  convertedEnergyCost: Number;
}

interface Weaknesses {
  type: String;
  value: String;
}
