import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../../services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username: string;
  password: string;

  constructor(private authService: AdminLoginService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe((authenticated: boolean) => {
        if (authenticated) {
          this.router.navigate(['/dashboard']);
        } else {
            alert("Incorrect Credential!")
          // console.log("Incorrect");
        }
      });
  }
  
}
