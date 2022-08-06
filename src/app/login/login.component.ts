import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myimages:string = "assets/images/supplier.png";
  mylogo:string = "assets/images/h2o2.png";

  constructor() { }

  ngOnInit(): void {
  }

}
