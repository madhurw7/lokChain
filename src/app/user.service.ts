import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabase) {}
  subscription: Subscription;
  save(user: firebase.User){
    
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
    this.db.object('/users/' + user.uid).subscribe(response => {
      if (!response.voted){ //If .voted doesn't exist/is False then makes it false, if true does nothing
        this.db.object('/users/' + user.uid).update({
          voted: false
        });
      } 
    })
  }

  getUserDetails(user: firebase.User){
    return this.db.object('/users/' + user.uid);
  }

  changeVotedStatus(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      voted: true
    })
  }
}
