import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../_services/loginauth.service';
import { AlertifyServiceService } from '../_services/alertifyService.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: LoginauthService, private alertify: AlertifyServiceService) { }


  model: any = {};
  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
