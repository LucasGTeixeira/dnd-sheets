import { CharacterSheet } from "../interfaces/CharacterSheet";

export class EmptyCharacterSheet implements CharacterSheet {
  id!: number;
  name: string = '';
  classname: string = '';
  race: string = '';
  level: number = 2;
  strength: number = 10;
  dexterity: number = 10;
  constitution: number = 10;
  wisdom: number = 10;
  intelligence: number = 10; 
  charisma: number = 10;
  modStrength: number = 0;  
  modDexterity: number = 0;  
  modConstitution: number = 0;  
  modWisdom: number = 0;  
  modIntelligence: number = 0; 
  modCharisma: number = 0;  
  inspiration: boolean = false;
  proficiencyBonus: number = 3;  
  armorClass: number = 0;  
  initiative: number = 0;
  speed: number = 0;
  currentHP: number = 0;
  maxHP: number = 0;
  tempHP: number = 0;
  hitDice: string = '';  
  stStrength: boolean = false;  
  stDexterity: boolean = false;  
  stConstitution: boolean = false;  
  stWisdom: boolean = false;  
  stIntelligence: boolean = false;  
  stCharisma: boolean = false;  
  stStrengthBonus: number = 0;  
  stDexterityBonus: number = 0;  
  stConstitutionBonus: number = 0;  
  stWisdomBonus: number = 0;  
  stIntelligenceBonus: number = 0;  
  stCharismaBonus: number = 0;  
  skillAcrobatics: boolean = false;
  skillAnimalHandling: boolean = false;
  skillArcana: boolean = false;
  skillAthletics: boolean = false;
  skillDeception: boolean = false;
  skillHistory: boolean = false;
  skillInsight: boolean = false;
  skillIntimidation: boolean = false;
  skillInvestigation: boolean = false;
  skillMedicine: boolean = false;
  skillNature: boolean = false;
  skillPerception: boolean = false;
  skillPerformance: boolean = false;
  skillPersuasion: boolean = false;
  skillReligion: boolean = false;
  skillSleightOfHand: boolean = false;
  skillStealth: boolean = false;
  skillSurvival: boolean = false;
  passiveWisdom: number = 0;
  equipment: string = '';  
  copperPieces: number = 0;  
  silverPieces: number = 0;  
  emeraldPieces: number = 0;  
  goldPieces: number = 0;  
  platinumPieces: number = 0;   

  constructor() {
    
  }
}
