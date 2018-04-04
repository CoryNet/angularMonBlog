import { Component } from '@angular/core';
import{Post} from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	
  postListItems = [
  new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',1,new Date()),
  new Post ('Mon deuxième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',-1,new Date()),
  new Post ('Encore un post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum incolumis acies: misera caecitas. Idem iste, inquam, de voluptate quid sentit?  ',0,new Date())
  ];

}
  
