import {
  Component,
  OnInit
} from '@angular/core';
import {
  PostService
} from './post-service';
import {
  PostInterface
} from './post-interface';
import {
  PostListsComponent
} from './post-lists.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/style.css'],
  directives: [PostListsComponent]
})

export class AppComponent implements OnInit {

  //private posts = [];
  private posts: PostInterface[];
  private selectPOST: PostInterface;
  private isSelected: boolean;
  isLoading = true;

  constructor(private _postService: PostService) {
    console.log(_postService);
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._postService.getPosts()
      .subscribe(
        data => {
          this.isLoading = false;
           this.posts = data;
        },
        err => console.log(err),
        () => console.log('Done Loading POSTS')
      );
  }

  OnSelect(post: PostInterface) {
    this.selectPOST = post;
    this.isSelected = true;
  }
}