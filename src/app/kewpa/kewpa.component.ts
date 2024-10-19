import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kewpa',
  templateUrl: './kewpa.component.html',
  styleUrls: ['./kewpa.component.css']
})
export class KewpaComponent implements OnInit {
  listItem:any = [];
  currentClient:string = 'none'

  ngOnInit(): void {
    console.log('data: ', environment.ward)
    this.currentClient = environment.ward;
  }

  addItem(kod:any){
    this.listItem.push(kod)
    console.log(this.listItem)
  }

}
