import { Component } from '@angular/core';
import { CharacterSheet } from '../interfaces/CharacterSheet';
import { EmptyCharacterSheet } from 'src/app/model/EmptyCharacterSheet'
import { CharacterSheetLoaderServiceService } from '../services/character-sheet-loader-service.service';
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-sheets-table',
  templateUrl: './sheets-table.component.html',
  styleUrls: ['./sheets-table.component.css']
})
export class SheetsTableComponent {
  charactersSheets : CharacterSheet[] = []
  selectedCharacter!: CharacterSheet;
  emptyCharacter : CharacterSheet = new EmptyCharacterSheet()
  showForm = false

  constructor(private characterService : CharacterSheetLoaderServiceService){}

  ngOnInit(){
    // let character1 = new CharacterSheetImp(1, "Aragorn", "Fighter", 15, 6, "Human")
    // let character2 = new CharacterSheetImp(2, "Legolas", "Barbarian", 16, 3, "Elf")
    // let character3 = new CharacterSheetImp(3, "Bardur", "Paladin", 14, 6, "Dwarf")
    // let character4 = new CharacterSheetImp(4, "Gandalf", "Wizard", 18, 20, "Human")
    // this.charactersSheets.push(character1, character2, character3, character4)
    this.getCharacters();
  }

  changeMode(character : CharacterSheet){
    this.selectedCharacter = character
    this.showForm = true
  }

  saveCharacter(){
    this.showForm = false;
  }

  saveOrCancelEvent(value : string){
    this.saveCharacter()
    this.getCharacters()
  }

  removeCharacter(character: CharacterSheet) {
    this.characterService.deleteCharacter(character.id)
      .pipe(concatMap(() => this.characterService.getAllCharacters()))
      .subscribe({
        next: (response) => {
          this.charactersSheets = response;
          console.log(this.charactersSheets);
        },
        error: () => {}
      });
  }

  getCharacters(){
    this.characterService.getAllCharacters().subscribe({
      next: (response) => {
        this.charactersSheets = response
        console.log(this.charactersSheets)      
      },
      error: () => {}
    })
  }
  


}
