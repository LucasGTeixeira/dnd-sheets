import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CharacterSheet } from '../interfaces/CharacterSheet';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetLoaderServiceService {
  private baseUrl = 'http://localhost8080/characterSheets'

  constructor(private http: HttpClient) { }

  getPlayerCharacters(id : number): Observable<CharacterSheet[]>{
    return this.http.get<CharacterSheet[]>(this.baseUrl)
  }

  getAllCharacters(): Observable<CharacterSheet[]>{
    return this.http.get<CharacterSheet[]>(this.baseUrl)
  }
  
  createCharacter(characterSheet: CharacterSheet): Observable<any> {
    return this.http.post<any>(this.baseUrl, characterSheet);
  }

  updateCharacter(characterSheet: CharacterSheet): Observable<any> {
    const url = `${this.baseUrl}/${characterSheet.id}`;
    return this.http.put<any>(url, characterSheet);
  }

  deleteCharacter(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  
}
