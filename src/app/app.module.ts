import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostItemFormComponent } from './post-list/post-item-form/post-item-form.component';
import { AuthComponent } from './auth/auth.component';
import { EditPostItemComponent } from './post-list/edit-post-item/edit-post-item.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import { UserListComponent } from './user-list/user-list.component';

import { PostService} from './services/post.service';
import {AuthGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import { UserService } from './services/user.service';

import {RouterModule} from "@angular/router";
import { Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [

 { path: 'posts/:id', canActivate: [AuthGuard], component: PostListComponent  },
  { path: 'posts',  canActivate: [AuthGuard],component:PostListComponent },
 
  { path: 'new', canActivate:[AuthGuard], component: NewPostComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', canActivate:[AuthGuard],  component: UserListComponent },
  { path: 'new-user', canActivate:[AuthGuard], component: NewUserComponent },
  { path: '',redirectTo: 'posts', pathMatch :'full' },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    PostListComponent,
    PostListItemComponent,
    AuthComponent ,
    PostItemFormComponent,
    EditPostItemComponent,
    NewUserComponent,
    FourOhFourComponent,
    NewPostComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
    AuthGuard,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
