import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterSheet } from '../../interfaces/CharacterSheet';
import { CharacterSheetImp } from 'src/app/model/CharacterSheetImp';
import { EmptyCharacterSHeet } from 'src/app/model/EmptyCharacterSheet';

@Component({
  selector: 'app-form-ficha',
  templateUrl: './form-ficha.component.html',
  styleUrls: ['./form-ficha.component.css']
})
export class FormFichaComponent {
  @Input() characterSheet: CharacterSheet = new EmptyCharacterSHeet();
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit():void{
    this.getSavingThrowsByClass(this.characterSheet.classname, this.characterSheet.level)
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
    this.characterSheet.StStrength = false;
    this.characterSheet.StDexterity = false;
    this.characterSheet.StConstitution = false;
    this.characterSheet.StWisdom = false;
    this.characterSheet.StInteligence = false;
    this.characterSheet.StCharisma = false;
    
    this.characterSheet.proficiencyBonus = this.getproficiencyBonus(level)
    if(classname == "Fighter" || classname == "Barbarian" || classname == "Monk" || classname == "Ranger"){
      this.characterSheet.StStrength = true;
      this.characterSheet.StStrengthBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Bard" || classname == "Monk" || classname == "Ranger" || classname =="Rogue"){
      this.characterSheet.StDexterity = true;
      this.characterSheet.StDexterityBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Artificer" || classname == "Barbarian" || classname == "Fighter" || classname == "Artificer" || classname == "Sorcerer"){
      this.characterSheet.StConstitution = true;
      this.characterSheet.StConstitutionBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Cleric" || classname == "Druid" || classname == "Paladin" || classname == "Warlock" || classname == "Wizard"){
      this.characterSheet.StWisdom = true;
      this.characterSheet.StWisdomBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Artificer" || classname == "Druid" || classname == "Rogue" || classname == "Wizard"){
      this.characterSheet.StInteligence = true;
      this.characterSheet.StInteligenceBonus = this.characterSheet.proficiencyBonus
    }
    if(classname == "Bard" || classname == "Cleric" || classname == "Paladin" || classname == "Sorcerer" || classname == "Warlock"){
      this.characterSheet.StCharisma = true;
      this.characterSheet.StCharismaBonus = this.characterSheet.proficiencyBonus
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

  saveCharacter(value: string){
    this.newItemEvent.emit(value)
  }

  cancelChanges(value : string){
    this.newItemEvent.emit(value)
  }

}