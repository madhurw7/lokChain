import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { ChainService } from './chain.service';
import { PollService } from './poll.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HashComponent } from './hash/hash.component';
import { BoxComponent } from './box/box.component';
import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { initializeApp } from 'firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { BlockComponent } from './block/block.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http'; 
import * as firebase from 'firebase';
import { SigninComponent } from './signin/signin.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HashComponent,
    BoxComponent,
    HomeComponent,
    PollComponent,
    PostsComponent,
    BlockComponent,
    AdminComponent,
    PageNotFoundComponent,
    NavComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'signin', component: SigninComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
      {path: '', component: BoxComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
    HttpClientModule

  ] ,
  providers: [
    PostService,
    PollService,
    ChainService,
    AngularFireAuth,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
