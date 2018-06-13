import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseObjectFactory } from 'angularfire2/database';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    console.log("madhur");
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
