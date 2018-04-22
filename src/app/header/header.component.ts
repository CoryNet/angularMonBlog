import { Component, OnInit,OnDestroy } from '@angular/core';
import {AuthService} from'../services/auth.service';
import {Router} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
	
authStatus: boolean;
authSubscription : Subscription;
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
   this.authSubscription  = this.authService.authSubject.subscribe(
        (authStatus: boolean) => {
          this.authStatus = authStatus;
        }
     );
   
  
  }
onSignOut() {
  	this.authService.signOut();
  

    this.router.navigate(['auth']);
  }
onSignIn() {
    this.authService.signIn();

    this.router.navigate(['posts']);
  }
ngOnDestroy() {
 
   this.authSubscription.unsubscribe();
 }

}
