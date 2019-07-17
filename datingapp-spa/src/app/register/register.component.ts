import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginauthService } from '../_services/loginauth.service';
import { AlertifyServiceService } from '../_services/alertifyService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() valuesSentFromChildtoParent = new EventEmitter();
  constructor(private auth: LoginauthService, private alertify: AlertifyServiceService) { }
  model: any = {};
  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe(() => {
      this.alertify.success('registered!');
    }, error => {
      this.alertify.error(error);
    });
    console.log(this.model);
  }

  canceled() {
    this.valuesSentFromChildtoParent.emit(false);
  }
}
