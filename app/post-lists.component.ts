import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PostInterface
} from './post-interface';
import {
  PostService
} from './post-service';
import {
  PostDetailComponent
} from './post-form.component';

@Component({
  selector: 'my-post-list',
  templateUrl: 'app/post-lists.html',
  styleUrls: ['app/style.css'],
  directives: [PostDetailComponent]
})

export class PostListsComponent {

  private title: string = "User Data"
  private datas: PostInterface;
  private isSelectedPost : boolean = false;
  private post: PostInterface;

  @Input() selectedUserId: PostInterface;

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.getPost(this.selectedUserId);
  }

  getPost(post: PostInterface) {
    this._postService.postData(post.userId).subscribe(
      data => {
        this.datas = data;
      },
      err => console.log(err),
      () => console.log('Post is Done')
    )
  };

  OnSelect(post: PostInterface) {
    this.isSelectedPost = true;
    this.post = post;
    console.log(this.post)
  };
}