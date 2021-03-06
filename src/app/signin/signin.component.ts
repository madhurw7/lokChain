import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { 
  }

  ngOnInit() {
  }

  signin(){
    this.authService.login();
  }

  signinFb(){
    this.authService.loginFb();
  }


}
