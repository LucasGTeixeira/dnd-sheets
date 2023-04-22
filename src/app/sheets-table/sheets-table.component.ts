import { Component } from '@angular/core';
import { CharacterSheet } from '../interfaces/CharacterSheet';

@Component({
  selector: 'app-sheets-table',
  templateUrl: './sheets-table.component.html',
  styleUrls: ['./sheets-table.component.css']
})
export class SheetsTableComponent {
  charactersSheet : CharacterSheet[] = []


}
