import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kewpa',
  templateUrl: './kewpa.component.html',
  styleUrls: ['./kewpa.component.css']
})
export class KewpaComponent implements OnInit {
  listItem:any = [];

  ngOnInit(): void {
    
  }

  addItem(kod:any){
    this.listItem.push(kod)
    console.log(this.listItem)
  }

}
