import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../_services/loginauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: LoginauthService) { }


  model: any = {};
  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('error logging in');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
