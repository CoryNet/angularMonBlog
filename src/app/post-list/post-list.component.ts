import { Component,Input,  OnInit } from '@angular/core';
import{Post} from '../post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	
  @Input() postListItem : Post;
  


  constructor() { 
  	
  }

  ngOnInit() {
  }
  getColor() {
    if(this.postListItem.loveIts > 0) {
      return 'green';
    } else if(this.postListItem.loveIts < 0) {
      return 'red';
    }
   }
   onReduire(){
   	this.postListItem.loveIts -=1;
   }
   onAjoutter(){
      	this.postListItem.loveIts +=1;
   }
   
}

