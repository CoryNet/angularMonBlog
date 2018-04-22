import { Component,  OnInit ,OnDestroy} from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
 	postListItems : any[];
  postListItemsSubscription : Subscription;
  constructor(private postService : PostService) { 
  	
  }

  ngOnInit() {
  	this.postListItemsSubscription = this.postService.postListItemsSubject.subscribe(
        (postListItems:any[]) => {
          this.postListItems = postListItems;
        }
     );
    this.postService.emitPostListItemsSubject();
  }
  ngOnDestroy() {
   this.postListItemsSubscription.unsubscribe();
  }

   
}

