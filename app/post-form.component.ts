import { Component , Input} from '@angular/core';
import { NgForm } from '@angular/common';
 
import { PostInterface } from './post-interface';
import { PostService } from './post-service';

@Component({
	selector: 'my-post-details',
	templateUrl: 'app/post-form.html'
})

export class PostDetailComponent {
  
  @Input() selectedValue: PostInterface;
  
  constructor(private _demoService: PostService) { }
  
  submittedSuccessful : boolean = false;
  
  onSubmit(){
    this._demoService.postJSON(this.selectedValue).subscribe(
          data => {
            console.log(data);
            this.submittedSuccessful = true;
           },
            err => console.log(err),
           () => console.log('Submitted successfully !')
        )
  }
}
