import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  email = "";
  pswd = "";
  msgText = "";

  verifyUser()
  {
    if(this.email == "abc@gmail.com" && this.pswd == "12345")
    {
      this.router.navigate(['/logomaker']);
    }
    else
    {
      this.msgText = "Invalid User or Password";
    }
  }

}
