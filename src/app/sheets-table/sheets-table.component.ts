import { Component } from '@angular/core';
import { CharacterSheet } from '../interfaces/CharacterSheet';
import { EmptyCharacterSheet } from 'src/app/model/EmptyCharacterSheet'
import { CharacterSheetLoaderServiceService } from '../services/character-sheet-loader-service.service';
import { concatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-sheets-table',
  templateUrl: './sheets-table.component.html',
  styleUrls: ['./sheets-table.component.css']
})
export class SheetsTableComponent {
  charactersSheets : CharacterSheet[] = []
  selectedCharacter!: CharacterSheet;
  emptyCharacter: CharacterSheet = new EmptyCharacterSheet;
  showForm = false

  constructor(private dialogRef: MatDialog, private characterService : CharacterSheetLoaderServiceService){}

  ngOnInit(){
    this.getCharacters();
  }

  changeMode(character : CharacterSheet){
    this.emptyCharacter = new EmptyCharacterSheet();
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
    const resultDialog = this.dialogRef.open(DeleteDialogComponent, {
      data: { 
        character : {
          name : character.name,
          level : character.level
        }
      }
    });

    resultDialog.afterClosed().subscribe({
      next: (value) => {
        if(value == true){
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
      }
    })
    
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
