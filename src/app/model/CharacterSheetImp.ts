import { CharacterSheet } from "../interfaces/CharacterSheet";

export class CharacterSheetImp implements CharacterSheet {
  id!: number;
  name: string = '';
  classname: string = '';
  race: string = '';
  level: number = 2;
  strength: number = 10;
  dexterity: number = 10;
  constitution: number = 10;
  wisdom: number = 10;
  intelligence: number = 10;  // Corrected spelling
  charisma: number = 10;
  modStrength: number = 0;  // Corrected naming convention (camelCase)
  modDexterity: number = 0;  // Corrected naming convention (camelCase)
  modConstitution: number = 0;  // Corrected naming convention (camelCase)
  modWisdom: number = 0;  // Corrected naming convention (camelCase)
  modIntelligence: number = 0;  // Corrected spelling and naming convention (camelCase)
  modCharisma: number = 0;  // Corrected naming convention (camelCase)
  inspiration: boolean = false;
  proficiencyBonus: number = 3;  // Corrected naming convention (camelCase)
  armorClass: number = 0;  // Corrected naming convention (camelCase)
  initiative: number = 0;
  speed: number = 0;
  currentHP: number = 0;
  maxHP: number = 0;
  tempHP: number = 0;
  hitDice: string = '';  // Corrected naming convention (camelCase)
  stStrength: boolean = false;  // Corrected naming convention (camelCase)
  stDexterity: boolean = false;  // Corrected naming convention (camelCase)
  stConstitution: boolean = false;  // Corrected naming convention (camelCase)
  stWisdom: boolean = false;  // Corrected naming convention (camelCase)
  stIntelligence: boolean = false;  // Corrected spelling and naming convention (camelCase)
  stCharisma: boolean = false;  // Corrected naming convention (camelCase)
  stStrengthBonus: number = 0;  // Corrected naming convention (camelCase)
  stDexterityBonus: number = 0;  // Corrected naming convention (camelCase)
  stConstitutionBonus: number = 0;  // Corrected naming convention (camelCase)
  stWisdomBonus: number = 0;  // Corrected naming convention (camelCase)
  stIntelligenceBonus: number = 0;  // Corrected spelling and naming convention (camelCase)
  stCharismaBonus: number = 0;  // Corrected naming convention (camelCase)
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
  equipment: string = '';  // Corrected naming convention (camelCase)
  copperPieces: number = 0;  // Corrected naming convention (camelCase)
  silverPieces: number = 0;  // Corrected naming convention (camelCase)
  emeraldPieces: number = 0;  // Corrected naming convention (camelCase)
  goldPieces: number = 0;  // Corrected naming convention (camelCase)
  platinumPieces: number = 0;  // Corrected naming convention (camelCase)

  constructor(id: number, name: string, classname: string, ca: number, level: number, race: string) {
    this.id = id;
    this.classname = classname;
    this.name = name;
    this.level = level;
    this.armorClass = ca;  // Corrected naming convention (camelCase)
    this.race = race;
  }

}
