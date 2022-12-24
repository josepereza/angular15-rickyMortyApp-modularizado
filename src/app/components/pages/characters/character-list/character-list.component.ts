import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';
import { PokeAPIResponse, Character } from '../../../../core/interfaces/character.interface'
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  personajes:Character[]=[]
constructor(private characterService:CharacterService, private route:ActivatedRoute){
}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      console.log('mis parametros', params)
this.characterService.getCharacters(params.q).subscribe((data:PokeAPIResponse)=>{
  this.personajes=data.results
}) 

    });

 }
}
