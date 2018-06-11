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


@NgModule({
  declarations: [
    AppComponent,
    HashComponent,
    BoxComponent,
    HomeComponent,
    PollComponent,
    PostsComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ] ,
  providers: [
    PostService,
    PollService,
    ChainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
