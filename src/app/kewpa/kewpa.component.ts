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
  serverReply:string = 'none'
  checkServer:boolean = true;
  interval:any;
  entryStatus:string = 'Please wait for few seconds! Server is starting!'
  currentRecord:any = [];

  ngOnInit(): void {
    console.log('data: ', environment.ward)
    this.currentClient = environment.ward;
    this.interval = setInterval(() => {
      this.text(); 
    }, 4000);
    console.log('the interval: ', this.interval)
    
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  text(){
    fetch('https://tricky-scratch-parcel.glitch.me')
        .then(response => response.text())
        .then((data)=>{
          console.log('server reply from kewpa page: ',data)
          if(data == 'server is up!'){
            clearInterval(this.interval);
            this.checkAlreadyFilled();
            
          }
        })
        .catch(error=>console.error('the error is: ', error)) 
  }

  check(){
    fetch('https://tricky-scratch-parcel.glitch.me/readcheck',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          ward:this.currentClient
        }
      )
    })
    .then(response => response.text())
    .then((data)=>{
      console.log('checkfileld', JSON.stringify(data))
      console.log('why: ',JSON.stringify(data))
      var status = data[3].toString();
      if(status === 'd'){
        console.log('Request for this month already done')
        this.entryStatus = 'Request for this month already done. Loading data...'
      } else {
        this.checkServer = false;
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
  }

  checkTrue(){
    fetch('https://tricky-scratch-parcel.glitch.me/updatecheck',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          ward:this.currentClient,
          completed:'TRUE'
        }
      )
    })
    .then(response => response.text())
    .then((data)=>{
      console.log('checkfileld', JSON.stringify(data))
      console.log('why: ',JSON.stringify(data))
      var status = data[3].toString();
      if(status === 'd'){
        console.log('Request for this month already done')
        this.entryStatus = 'Request for this month already done.'
      } else {
        this.checkServer = false;
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
  }

  checkFalse(){
    fetch('https://tricky-scratch-parcel.glitch.me/updatecheck',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          ward:this.currentClient,
          completed:'FALSE'
        }
      )
    })
    .then(response => response.text())
    .then((data)=>{
      console.log('checkfileld', JSON.stringify(data))
      console.log('why: ',JSON.stringify(data))
      var status = data[3].toString();
      if(status === 'd'){
        console.log('Request for this month already done')
        this.entryStatus = 'Request for this month already done.'
      } else {
        this.checkServer = false;
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
  }

  checkAlreadyFilled(){
    fetch('https://tricky-scratch-parcel.glitch.me/check',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          ward:this.currentClient
        }
      )
    })
    .then(response => response.text())
    .then((data)=>{
      console.log('checkfileld', JSON.stringify(data))
      console.log('why: ',JSON.stringify(data))
      var status = data[3].toString();
      if(status === 'd'){
        console.log('Request for this month already done')
        this.entryStatus = 'Request for this month already done. Loading data...'
        this.loadEnteredData();
      } else {
        this.checkServer = false;
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
    
  }

  loadEnteredData(){
    fetch('https://tricky-scratch-parcel.glitch.me/retrieve',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          ward:this.currentClient
        }
      )
    })
    .then(response => response.text())
    .then((data)=>{
      console.log('original response', data)
      console.log('parsing: ', (JSON.parse(data))[0][0])
      const returnedData = JSON.parse(data);
      console.log('the length: ', returnedData[0].length)
      console.log('why no response')

      let my_object = {}; 
      let colum_criteria = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56];
      let description = ['BIOHAZ BAG','GEL TUBE','EDTA TUBE','GLUC TUBE','COAG TUBE','URINE CONT','PAEDS GEL', 'PAEDS FBC', 'PAEDS EDTA', 'STOOL CONT', 'SWAB - AMIES (GEL)', 'SWAB - CARRY BLAIR', 'ESR TUBE', '24 HRS URINE CONTAINER (BOX)', 'C&S AEROBIC', 'C&S ANAEROBIC', 'C&S PAEDS', 'C&S FUNGAL', 'LITHIUM HEP TUBE', 'G6PD PAPER', 'BLOOD SPOT PAPER', 'FOAM BOX', 'PARAFILM', 'BIJOUE BOTTLE', 'GLASS SLIDES', 'MICROSCOPE SLIDE', 'PLAIN TUBE + RED STOPER', 'SODIUM HEP TUBE'];

      colum_criteria.forEach((data, index)=>{
        console.log('the number: ', returnedData[0][data])
        console.log('the index: ', index)
        if(returnedData[0][data] == '' || returnedData[0][data] == null){
          console.log('not valid number')
        } else {
          console.log('ada data ni')
          this.currentRecord.push(
            {
              items:description[index],
              value:returnedData[0][data]
            }
          )
        }
        this.entryStatus = ''
        console.log('the array contains: ', this.currentRecord)
      })


      for (let i = 0; i < returnedData[0].length; i++) {
        console.log('cell data: ',returnedData[0][i]);
      }
      // if(status === 'd'){
      //   console.log('Request for this month already done')
      //   this.entryStatus = 'Request for this month already done. Loading data...'
      //   this.loadEnteredData();
      // } else {
      //   this.checkServer = false;
      // }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
  }

  addItem(
    kod1:any, 
    kod2:any,
    kod3:any,
    kod4:any,
    kod5:any,
    kod6:any,
    kod7:any,
    kod8:any,
    kod9:any,
    kod10:any,
    kod11:any,
    kod12:any,
    kod13:any,
    kod14:any,
    kod15:any,
    kod16:any,
    kod17:any,
    kod18:any,
    kod19:any,
    kod20:any,
    kod21:any,
    kod22:any,
    kod23:any,
    kod24:any,
    kod25:any,
    kod26:any,
    kod27:any,
    kod28:any,
  ){
    //this.listItem.push(kod)
    console.log(this.listItem)
    
      fetch('https://tricky-scratch-parcel.glitch.me',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(
          {
            num1:kod1, 
            num2:kod2,
            num3:kod3,
            num4:kod4,
            num5:kod5,
            num6:kod6,
            num7:kod7,
            num8:kod8,
            num9:kod9,
            num10:kod10,
            num11:kod11,
            num12:kod12,
            num13:kod13,
            num14:kod14,
            num15:kod15,
            num16:kod16,
            num17:kod17,
            num18:kod18,
            num19:kod19,
            num20:kod20,
            num21:kod21,
            num22:kod22,
            num23:kod23,
            num24:kod24,
            num25:kod25,
            num26:kod26,
            num27:kod27,
            num28:kod28,
            ward:this.currentClient
          }
        )
      })
      .then(response => response.text())
      .then((data)=>{
        console.log('the data is', JSON.stringify(data))
        console.log('why: ',JSON.stringify(data))
        var status = data.toString();
        if(status === 'OK'){
          this.serverReply = 'Data is sent sucessfully!'
          console.log('im in here')
        } else {
          this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
        }
        console.log('after: ', status)
      })
      .catch((error)=>{
        console.error('the error is: ', error);
        this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
      })
    
  }

}
