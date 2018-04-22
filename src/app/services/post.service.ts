import { Injectable } from '@angular/core';
import{Post} from '../models/post.model';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class PostService {


  postListItemsSubject = new Subject<Post[]>();


 private postListItems = [
  new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',1,new Date()),
  new Post ('Mon deuxième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',-1,new Date()),
  new Post ('Encore un post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',0,new Date())
  ];
  constructor() { }

  emitPostListItemsSubject() {
      this.postListItemsSubject.next(this.postListItems.slice());
  }

  getColorOne(index: number) {
    if(this.postListItems[index].loveIts > 0) {
      return 'green';
    } else if(this.postListItems[index].loveIts < 0) {
      return 'red';
    }
   }
   onReduireOne(index: number){
     this.postListItems[index].loveIts -=1;
     this.emitPostListItemsSubject();
   }
   onAjoutterOne(index: number){
        this.postListItems[index].loveIts +=1;
         this.emitPostListItemsSubject();
   }
  onSupprimeOne(index: number) {

    this.postListItems.splice(index, 1);

    this.emitPostListItemsSubject();
  }
  addPost(post: Post) {
    this.postListItems.push(post);
    this.emitPostListItemsSubject();
  }
}
