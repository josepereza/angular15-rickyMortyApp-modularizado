import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPIResponse,Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) {
   

   }
   getCharacters(query=' ',page=1){
    return  this.http.get<PokeAPIResponse>(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`)
   }

   getDetails(id: number) {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
    
  }
}
