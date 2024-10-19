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
  }

  

  verify(user:string, password:string){
    if(user == 'wd1' && password == '123'){
      environment.ward = 'Ward 1'
      this.router.navigate(['/kewpa']);
    } else {
      alert('access denied')
    }
  }
}
