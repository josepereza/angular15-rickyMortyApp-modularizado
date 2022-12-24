import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { CharacterService } from 'src/app/core/services/character.service';

import { Observable } from 'rxjs';

import { take } from 'rxjs/operators';
import { Character } from 'src/app/core/interfaces/character.interface';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  character$!: Observable<Character> 
  constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) { }
  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }
}
