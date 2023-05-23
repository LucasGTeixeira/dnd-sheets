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
    inteligence: number = 10;
    charisma: number = 10;
    ModStrength : number = 0;
    ModDexterity : number = 0;
    ModConstitution : number = 0;
    ModWisdom : number = 0;
    ModInteligence : number = 0;
    ModCharisma : number = 0;
    inspiration: boolean = false;
    proficiencyBonus = 3;
    ArmorClass: number = 0;
    Initiative: number = 0;
    Speed: number = 0;
    currentHP: number = 0;
    maxHp: number = 0;
    tempHP: number = 0;
    HitDice: string = '';
    StStrength: boolean = false;
    StDexterity: boolean = false;
    StConstitution: boolean = false;
    StWisdom: boolean = false;
    StInteligence: boolean = false;
    StCharisma: boolean = false;
    StStrengthBonus : number = 0
    StDexterityBonus : number = 0
    StConstitutionBonus : number = 0
    StWisdomBonus : number = 0
    StInteligenceBonus : number = 0
    StCharismaBonus : number = 0
    SkillAcrobatics: boolean = false;
    SkillAnimalHandling: boolean = false;
    SkillArcana: boolean = false;
    SkillAthletics: boolean = false;
    SkillDeception: boolean = false;
    SkillHistory: boolean = false;
    SkillInsight: boolean = false;
    SkillIntimidation: boolean = false;
    SkillInvestigation: boolean = false;
    SkillMedicine: boolean = false;
    SkillNature: boolean = false;
    SkillPerception: boolean = false;
    SkillPerformance: boolean = false;
    SkillPersuasion: boolean = false;
    SkillReligion: boolean = false;
    SkillSleightOfHand: boolean = false;
    SkillStealth: boolean = false;
    SkillSurvival: boolean = false;
    passiveWisdom:number = 0;
    equipaments: string = "";
    copperPlates:number = 0;
    silverPlates:number = 0;
    emeraldPlates:number = 0;
    goldPlates:number = 0;
    platinumPlates:number = 0;

    constructor(id : number, name : string, classname : string, ca : number, level : number, race : string) {
      this.id = id;
      this.classname = classname;
      this.name = name;
      this.level = level
      this.ArmorClass = ca;
      this.race = race;
    }

  }