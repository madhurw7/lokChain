import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  user: firebase.User;
  subscription: Subscription;
  constructor(private authService: AuthService) {
    this.subscription = this.authService.state()
      .subscribe(response => {
      this.user = response;
      console.log(response);
      console.log(this.user);
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  signout() {
    this.authService.logout();
  }
}
