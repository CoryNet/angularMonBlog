import {Subject} from 'rxjs/Subject';
export class AuthService {

  authSubject = new Subject<boolean>();
  private isAuth = false;
  
  
  signIn() {
   
            this.isAuth = true;
           
            this.emitAuthSubject();
      
  }

  signOut() {
   
    this.isAuth = false;
  
  }
  emitAuthSubject() {
      this.authSubject.next(this.isAuth.valueOf());
  }
  getAuth() {
    return this.isAuth;
  }
}