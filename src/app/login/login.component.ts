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
    if(user == 'upd' && password == '123'){
      environment.ward = 'UPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ed' && password == '123'){
      environment.ward = 'ED'
      this.router.navigate(['/kewpa']);
    } else 
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
    } else 
    if(user == 'cap' && password == '123'){
      environment.ward = 'Cap'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd9' && password == '123'){
      environment.ward = 'Ward 9'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'scn' && password == '123'){
      environment.ward = 'SCN'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'nicu' && password == '123'){
      environment.ward = 'NICU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'icu' && password == '123'){
      environment.ward = 'ICU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'lr' && password == '123'){
      environment.ward = 'LR'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ot' && password == '123'){
      environment.ward = 'OT'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'opd' && password == '123'){
      environment.ward = 'OPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'mopd' && password == '123'){
      environment.ward = 'MOPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'og' && password == '123'){
      environment.ward = 'OG'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'popd' && password == '123'){
      environment.ward = 'POPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'sopd' && password == '123'){
      environment.ward = 'SOPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ortho' && password == '123'){
      environment.ward = 'ORTHO'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'forensik' && password == '123'){
      environment.ward = 'FORENSIK'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'hdu' && password == '123'){
      environment.ward = 'HDU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'hduremis' && password == '123'){
      environment.ward = 'HDUREMIS'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'eye' && password == '123'){
      environment.ward = 'EYE'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'psy' && password == '123'){
      environment.ward = 'PSY'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'xray' && password == '123'){
      environment.ward = 'XRAY'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'cssu' && password == '123'){
      environment.ward = 'CSSU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ukkp' && password == '123'){
      environment.ward = 'UKKP'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'pathobb' && password == '123'){
      environment.ward = 'PATOBB'
      this.router.navigate(['/kewpa']);
    } else 
    {
      alert('access denied')
    }
  }
}
