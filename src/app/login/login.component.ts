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
    if(user == 'upd' && password == 'upd'){
      environment.ward = 'UPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ed' && password == 'ed'){
      environment.ward = 'ED'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd1' && password == 'wd1'){
      environment.ward = 'Ward 1'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd2' && password == 'wd2'){
      environment.ward = 'Ward 2'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd3' && password == 'wd3'){
      environment.ward = 'Ward 3'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd4' && password == 'wd4'){
      environment.ward = 'Ward 4'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd5' && password == 'wd5'){
      environment.ward = 'Ward 5'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd6' && password == 'wd6'){
      environment.ward = 'Ward 6'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd7' && password == 'wd7'){
      environment.ward = 'Ward 7'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd8' && password == 'wd8'){
      environment.ward = 'Ward 8'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'cap' && password == 'cap'){
      environment.ward = 'Cap'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'wd9' && password == 'wd9'){
      environment.ward = 'Ward 9'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'scn' && password == 'scn'){
      environment.ward = 'SCN'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'nicu' && password == 'nicu'){
      environment.ward = 'NICU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'icu' && password == 'icu'){
      environment.ward = 'ICU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'lr' && password == 'lr'){
      environment.ward = 'LR'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ot' && password == 'ot'){
      environment.ward = 'OT'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'opd' && password == 'opd'){
      environment.ward = 'OPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'mopd' && password == 'mopd'){
      environment.ward = 'MOPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'og' && password == 'og'){
      environment.ward = 'OG'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'popd' && password == 'popd'){
      environment.ward = 'POPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'sopd' && password == 'sopd'){
      environment.ward = 'SOPD'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ortho' && password == 'ortho'){
      environment.ward = 'ORTHO'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'forensik' && password == 'forensik'){
      environment.ward = 'FORENSIK'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'hdu' && password == 'hdu'){
      environment.ward = 'HDU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'hduremis' && password == 'hduremis'){
      environment.ward = 'HDUREMIS'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'eye' && password == 'eye'){
      environment.ward = 'EYE'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'psy' && password == 'psy'){
      environment.ward = 'PSY'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'xray' && password == 'xray'){
      environment.ward = 'XRAY'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'cssu' && password == 'cssu'){
      environment.ward = 'CSSU'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'ukkp' && password == 'ukkp'){
      environment.ward = 'UKKP'
      this.router.navigate(['/kewpa']);
    } else 
    if(user == 'pathobb' && password == 'pathobb'){
      environment.ward = 'PATOBB'
      this.router.navigate(['/kewpa']);
    } else 
    {
      alert('access denied')
    }
  }
}
