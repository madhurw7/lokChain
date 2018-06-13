import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { ChainService } from './../chain.service';
import { PollService } from './../poll.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnDestroy {
  candidates: any[];
  unpVotes;
  user: firebase.User;
  constructor(private service: PollService, private chainService: ChainService, private userService: UserService, private authService: AuthService, private router: Router) {
    this.authService.state().subscribe(user => {
      this.user = user;
    })
  }
  subscription : Subscription;
  userSubscription : Subscription;
  ngOnInit() {
    //Get Posts from posts service
    this.subscription = this.service.getCandidates()
      .subscribe(response => {
        this.candidates = response;
      })
  }
userDetails;
  vote(candidate){
    if (!this.user) this.router.navigateByUrl('/signin');
   else { 
    this.userService.getUserDetails(this.user).subscribe(response => {
      this.userDetails = response;
    })
 if (!this.userDetails.voted){
    this.service.vote(candidate)
      .update({votes: ++candidate.votes});
    }
 else (window.alert("You have already voted")); 
  }   
// Add a method to increment the value of votes in the Unprocessed Transactions
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
