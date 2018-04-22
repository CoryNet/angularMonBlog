import { Component, OnInit ,OnDestroy} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, OnDestroy{

  authStatus: boolean;
  authSubscription : Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   
    this.authSubscription  = this.authService.authSubject.subscribe(
        (authStatus: boolean) => {
          this.authStatus = authStatus;
        }
     );
    this.authService.emitAuthSubject();
  }

  onSignIn() {
        this.authService.signIn();
        this.router.navigate(['/posts']);
       
  }   

  onSignOut() {
    this.authService.signOut();
  }
 ngOnDestroy(){
   this.authSubscription.unsubscribe();
 }
}
