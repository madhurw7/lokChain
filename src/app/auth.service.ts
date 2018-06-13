import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseObjectFactory } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) { }


  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem("returnUrl", returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  state(){
    return this.afAuth.authState;
  }

  loginFb(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }
}
