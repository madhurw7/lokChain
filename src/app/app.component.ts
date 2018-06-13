import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private authService: AuthService, private router: Router, private userSevice: UserService){
    this.authService.state().subscribe(user => {
      if(user) {
        this.userSevice.save(user);userSevice.save(user);
        let returnUrl= localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
        localStorage.removeItem('returnUrl');
        

      }
    });
  }
}
