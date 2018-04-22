import { Component,Input, OnInit } from '@angular/core';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent  implements OnInit {

  @Input() index: number;
  @Input() postListItem: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  getColor() {
   this.postService.getColorOne(this.index);
   }
   onReduire(){
      this.postService.onReduireOne(this.index);
   }
   onAjoutter(){
        this.postService.onAjoutterOne(this.index);
   }
   onSupprime(){
        this.postService.onSupprimeOne(this.index);
   }

}