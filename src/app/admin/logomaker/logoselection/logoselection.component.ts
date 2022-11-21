import { Component,Input,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoselection',
  templateUrl: './logoselection.component.html',
  styleUrls: ['./logoselection.component.scss']
})
export class LogoselectionComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() Name:any;
  message:any
  name:any= new FormControl("",[(Validators.required)]);


  ngOnInit(): void {
    this.message = this.Name;
  }



logoedit(){
  this.router.navigate(['/editlogo'])
}
}




