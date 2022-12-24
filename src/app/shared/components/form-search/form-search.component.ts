import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  formSearch=new FormControl('');

  constructor(private router:Router) {
    this.formSearch.valueChanges.subscribe(data=>{
      if((data && data.length >3) || (data===''))  {
        this.router.navigate(['/character-list'],{queryParams:{q:data}})
      }
    })
    
  }
}
