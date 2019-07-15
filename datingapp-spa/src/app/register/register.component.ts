import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginauthService } from '../_services/loginauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() valuesSentFromChildtoParent = new EventEmitter();
  constructor(private auth: LoginauthService) { }
  model: any = {};
  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe(() => {
      console.log('registered!');
    }, error => {
      console.log(error);
    });
    console.log(this.model);
  }

  canceled() {
    this.valuesSentFromChildtoParent.emit(false);
    console.log('canceled');
  }
}
