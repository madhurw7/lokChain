import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(response => {console.log(response)});
  }

  ngOnInit() {
  }

  signin(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    console.log("madhur");
  }

  signout() {
    this.afAuth.auth.signOut();
  }

}
