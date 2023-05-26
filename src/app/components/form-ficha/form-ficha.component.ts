import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterSheet } from '../../interfaces/CharacterSheet';
import { CharacterSheetImp } from 'src/app/model/CharacterSheetImp';
import { EmptyCharacterSheet } from 'src/app/model/EmptyCharacterSheet'
import { CharacterSheetLoaderServiceService } from 'src/app/services/character-sheet-loader-service.service';
@Component({
  selector: 'app-form-ficha',
  templateUrl: './form-ficha.component.html',
  styleUrls: ['./form-ficha.component.css']
})
export class FormFichaComponent {
  @Input() characterSheet!: CharacterSheet;
  @Output() newItemEvent = new EventEmitter<string>();
  backupData: CharacterSheet = new EmptyCharacterSheet;
  sheetMode : String = '';

  constructor(private charService : CharacterSheetLoaderServiceService){}
  

  ngOnInit(): void {
    if(this.characterSheet.name === ''){
      this.sheetMode = 'add'
    }else{
      this.backupData = { ...this.characterSheet };
    }
    this.getSavingThrowsByClass(this.characterSheet.classname, this.characterSheet.level);
  }
  
  getModifier(attribute: number): number {
    return Math.floor((attribute - 10) / 2);
  }

  getHitDice(classname : string): string{
    if(classname == "Fighter" || classname == "Paladin" || classname == "Ranger") return "d10";
    else if(classname == "Barbarian") return "d12";
    else return "d8";  
  }

  getSavingThrowsByClass(classname : string, level : number):void{
    this.characterSheet.stStrength = false;
    this.characterSheet.stDexterity = false;
    this.characterSheet.stConstitution = false;
    this.characterSheet.stWisdom = false;
    this.characterSheet.stIntelligence = false;
    this.characterSheet.stCharisma = false;
    
    this.characterSheet.proficiencyBonus = this.getproficiencyBonus(level)
    if(classname == "Fighter" || classname == "Barbarian" || classname == "Monk" || classname == "Ranger"){
      this.characterSheet.stStrength = true;
      this.characterSheet.stStrengthBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Bard" || classname == "Monk" || classname == "Ranger" || classname =="Rogue"){
      this.characterSheet.stDexterity = true;
      this.characterSheet.stDexterityBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Artificer" || classname == "Barbarian" || classname == "Fighter" || classname == "Artificer" || classname == "Sorcerer"){
      this.characterSheet.stConstitution = true;
      this.characterSheet.stConstitutionBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Cleric" || classname == "Druid" || classname == "Paladin" || classname == "Warlock" || classname == "Wizard"){
      this.characterSheet.stWisdom = true;
      this.characterSheet.stWisdomBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Artificer" || classname == "Druid" || classname == "Rogue" || classname == "Wizard"){
      this.characterSheet.stIntelligence = true;
      this.characterSheet.stIntelligenceBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Bard" || classname == "Cleric" || classname == "Paladin" || classname == "Sorcerer" || classname == "Warlock"){
      this.characterSheet.stCharisma = true;
      this.characterSheet.stCharismaBonus = this.characterSheet.proficiencyBonus
    }
  }

  getproficiencyBonus(level : number): number{
    if(level <= 4){
      this.characterSheet.proficiencyBonus = 2;
    }
    else if(level <= 8){
      this.characterSheet.proficiencyBonus = 3;
    }
    else if(level <= 12){
      this.characterSheet.proficiencyBonus = 4;
    }
    else if (level <= 16){
      this.characterSheet.proficiencyBonus = 5;
    }
    else{
      this.characterSheet.proficiencyBonus = 6;
    }
    return this.characterSheet.proficiencyBonus
  }

  changeSkillStatus(skillBoolean : boolean){
    skillBoolean = !skillBoolean
  }

  saveChanges(value: string) {
  if(this.sheetMode == 'add'){
    console.log("chegou no add")
    this.charService.createCharacter(this.characterSheet).subscribe(() => {
      this.newItemEvent.emit(value);
    },
    () => {
    }
  );
  }
  else{
    this.charService.updateCharacter(this.characterSheet).subscribe(
      () => {
        this.newItemEvent.emit(value);
      },
      () => {
      }
    );
  }
}
  cancelChanges(value : string){
    console.log(this.characterSheet)
    this.characterSheet = this.backupData
    console.log(this.characterSheet)
    this.newItemEvent.emit(value)
  }

}