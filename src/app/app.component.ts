import { Component, OnInit } from '@angular/core';
import {PostService} from './services/post.service';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

 postListItems : any[];
 postListItemsSubscription : Subscription;

 constructor(private postService: PostService){ }	

  ngOnInit() {
  	this.postListItemsSubscription = this.postService.postListItemsSubject.subscribe(
        (postListItems:any[]) => {
          this.postListItems = postListItems;
        }
     );
    this.postService.emitPostListItemsSubject();
  }
}
