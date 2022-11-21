import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logomaker',
  templateUrl: './logomaker.component.html',
  styleUrls: ['./logomaker.component.scss'],
  template:'<app-logoselection [Name]="sendname"></app-logoselection>'
})
export class LogomakerComponent implements OnInit {

  bussinessname:any;
  sendname:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  logoselection(){
    this.sendname = this.bussinessname;
    this.router.navigate(['/logoselection']);
  }
}
