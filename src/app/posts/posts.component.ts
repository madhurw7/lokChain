import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostService) {
    
   }

   createPost(input: HTMLInputElement){
    let post: any = {title: input.value};
    input.value = "";
    this.service.createPost(post)
      .subscribe(response =>{
        post.id = response.json().id;
        this.posts.splice(0, 0, post)
        console.log(response.json());
      })
   }

   updatePost(post){
     this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
   }

   deletePost(post){
     this.service.deletePost(post)
      .subscribe(response => {
        console.log(response.json());
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
   }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        
        this.posts = response.json();
      })
  }

  

}
