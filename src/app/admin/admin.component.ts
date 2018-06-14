import { PollService } from './../poll.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService, private pollService: PollService) { }

  ngOnInit() {
  }

  resetPoll(){
    this.userService.resetUserStatus();
    this.pollService.resetVotes();
  }

}
