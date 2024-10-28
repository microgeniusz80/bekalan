import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
    console.log('data: ', environment.ward)
    fetch('https://tricky-scratch-parcel.glitch.me')
    .then(response => response.text())
    .then(data=>console.log(data))
    .catch(error=>console.error('the error is: ', error))
  }

  verify(user:string, password:string){
    if(user == 'wd1' && password == '123'){
      environment.ward = 'Ward 1'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd2' && password == '123'){
      environment.ward = 'Ward 2'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd3' && password == '123'){
      environment.ward = 'Ward 3'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd4' && password == '123'){
      environment.ward = 'Ward 4'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd5' && password == '123'){
      environment.ward = 'Ward 5'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd6' && password == '123'){
      environment.ward = 'Ward 6'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd7' && password == '123'){
      environment.ward = 'Ward 7'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd8' && password == '123'){
      environment.ward = 'Ward 8'
      this.router.navigate(['/kewpa']);
    } else {
      alert('access denied')
    }
  }
}
