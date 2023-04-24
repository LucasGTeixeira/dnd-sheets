import { Component } from '@angular/core';
import { CharacterSheet } from '../interfaces/CharacterSheet';
import { CharacterSheetImp } from '../model/CharacterSheetImp';
import { EmptyCharacterSHeet } from '../model/EmptyCharacterSheet';

@Component({
  selector: 'app-sheets-table',
  templateUrl: './sheets-table.component.html',
  styleUrls: ['./sheets-table.component.css']
})
export class SheetsTableComponent {
  charactersSheets : CharacterSheet[] = []
  selectedCharacter : CharacterSheet = new EmptyCharacterSHeet()
  emptyCharacter : CharacterSheet = new EmptyCharacterSHeet()
  showForm = false

  ngOnInit(){
    let character1 = new CharacterSheetImp(1, "Aragorn", "Fighter", 15, 6, "Human")
    let character2 = new CharacterSheetImp(2, "Legolas", "Barbarian", 16, 3, "Elf")
    let character3 = new CharacterSheetImp(3, "Bardur", "Paladin", 14, 6, "Dwarf")
    let character4 = new CharacterSheetImp(4, "Gandalf", "Wizard", 18, 20, "Human")
    this.charactersSheets.push(character1, character2, character3, character4)
  }

  changeMode(character : CharacterSheet){
    this.selectedCharacter = character
    this.showForm = true
  }

  saveCharacter(){
    this.showForm = false;
  }

  newCharacter(){
    this.selectedCharacter = new EmptyCharacterSHeet()
    this.showForm = true
  }

  saveOrCancelEvent(value : string){
    this.saveCharacter()
  }
  


}
