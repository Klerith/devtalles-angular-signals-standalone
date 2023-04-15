

export class Pokemon {

  constructor(
    public id  : string,
    public name: string,
  ) {}

  get sprite() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.id }.png`;
  }


}
