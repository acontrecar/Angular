import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
  ];

  public addCharacter(character: Character): void {
    // this.characters.push(character);
    // console.log(character);
    // console.log('Main Page Component');
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
