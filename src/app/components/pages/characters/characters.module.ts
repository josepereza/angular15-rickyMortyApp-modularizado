import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListModule } from './character-list/character-list.module';
import { CharacterDetailsModule } from './character-details/character-details.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterListModule,
    CharacterDetailsModule
  ],
  exports:[CharacterListModule,CharacterDetailsModule]
})
export class CharactersModule { }
