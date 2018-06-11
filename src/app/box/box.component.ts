import { ChainService } from './../chain.service';
import { PollService } from './../poll.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnDestroy {
  candidates: any[];
  unpVotes;

  constructor(private service: PollService, private chainService: ChainService) {
  
  }
  subscription: Subscription;

  ngOnInit() {
    //Get Posts from posts service
    this.subscription = this.service.getCandidates()
      .subscribe(response => {
        this.candidates = response;
      })
  }

  vote(candidate){  
    
    
    this.service.vote(candidate)
      .update({votes: ++candidate.votes});
// Add a method to increment the value of votes in the Unprocessed Transactions
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
