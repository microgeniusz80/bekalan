import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-kewpa',
  templateUrl: './kewpa.component.html',
  styleUrls: ['./kewpa.component.css']
})
export class KewpaComponent implements OnInit {
  @ViewChild('canvas',{static:true}) canvas!: ElementRef;

  canvasOne:any;

  listItem:any = [];
  currentClient:string = 'none'
  serverReply:string = 'none'
  checkServer:boolean = true;
  interval:any;
  entryStatus:string = 'Please wait for few seconds! Loading data!'
  currentRecord:any = [];
  hideTable:boolean = true;
  hideKewpaForm:boolean = false;

  selectedValue1: any="";
  selectedValue2: any="";
  selectedValue3: any="";
  selectedValue4: any="";
  selectedValue5: any="";
  selectedValue6: any="";
  selectedValue7: any="";
  selectedValue8: any="";
  selectedValue9: any="";
  selectedValue10: any="";
  selectedValue11: any="";
  selectedValue12: any="";

  qn1:any=null;
  qn2:any=null;
  qn3:any=null;
  qn4:any=null;
  qn5:any=null;
  qn6:any=null;
  qn7:any=null;
  qn8:any=null;
  qn9:any=null;
  qn10:any=null;
  qn11:any=null;
  qn12:any=null;

  alertcontent:string='Stock detail already exist';

  entry = {
    "data":[
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
      {
        "data":"",
        "value":0,
      },
    ]
  }


 resetBox(){
  this.entry.data[0].value = this.qn1
  this.entry.data[1].value = this.qn2
  this.entry.data[2].value = this.qn3
  this.entry.data[3].value = this.qn4
  this.entry.data[4].value = this.qn5
  this.entry.data[5].value = this.qn6
  this.entry.data[6].value = this.qn7
  this.entry.data[7].value = this.qn8
  this.entry.data[8].value = this.qn9
  this.entry.data[9].value = this.qn10
  this.entry.data[10].value = this.qn11
  this.entry.data[11].value = this.qn12
  console.log('final data: ', this.entry)

  var checking = false

  this.entry.data.forEach((item, index) => {
    if (item.data !== '' && item.value == null) {
      checking = true
      console.log('sangkut: ', index)
    }

    if (item.value !== null && item.data == '') {
      checking = true
      console.log('reverse sangkut: ', index)
    }
  })

  if (checking){
    alert("Please fill in the pair data")
    checking = false
  } else {
    this.sendData(this.entry.data)
  }
  
 }

  ngOnInit(): void {
    //console.log('dalam entry: ',this.entry.data[0].data);
    console.log('oninit data: ', this.entry.data)
    this.canvasOne = this.canvas.nativeElement;
    let topCanvas = this.canvasOne.offsetTop;
    let leftCanvas = this.canvasOne.offsetLeft;
    const ctx = this.canvasOne.getContext('2d');

    this.start(ctx, topCanvas, leftCanvas, this.canvasOne);

    console.log('data: ', environment.ward)
    this.currentClient = environment.ward;
    this.interval = setInterval(() => {
      this.text(); 
    }, 4000);
    console.log('the interval: ', this.interval)
    
  }

  retrieveBox(){
    console.log('value of: ',this.selectedValue1);
    
  }

  async start(ctx: CanvasRenderingContext2D, topCanvas: number, leftCanvas: number, canvas: any){
    var img = new Image();
    img.src = "/assets/kewpa.png";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1339, 948);

      ctx.font = "16px Arial";
      ctx.textAlign = "left";
      //ctx.fillText('Citrate Tube',220,398);
      //ctx.fillText('MANJUNG, PERAK HAS AGREED TO PRIVILEGE',215,90);
    
    }
  }

  onChange1(newValue: any){
    var test = false
    console.log('initial data: ', this.entry.data)
    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      
      alert('Stock detail already exist')
      newValue.value = ''
    } else {
      this.entry.data[0].data = newValue.value;
      if(newValue.value == ''){
        this.qn1 = null
      }

      //this.entry.data[0].value = this.qn1;
    }

    console.log('final data: ', this.entry.data)
  }

  onChange2(newValue: any){
    var test = false
    console.log('initial data: ', this.entry.data)
    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      
      alert('Stock detail already exist')
      //this.selectedValue2 = null
      newValue.value = null
    } else {
      this.entry.data[1].data = newValue.value;
      if(newValue.value == ''){
        this.qn2 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange3(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[2].data = newValue.value;
      if(newValue.value == ''){
        this.qn3 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange4(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[3].data = newValue.value;
      if(newValue.value == ''){
        this.qn4 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange5(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[4].data = newValue.value;
      if(newValue.value == ''){
        this.qn5 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange6(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[5].data = newValue.value;
      if(newValue.value == ''){
        this.qn6 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange7(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[6].data = newValue.value;
      if(newValue.value == ''){
        this.qn7 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange8(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[7].data = newValue.value;
      if(newValue.value == ''){
        this.qn8 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange9(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[8].data = newValue.value;
      if(newValue.value == ''){
        this.qn9 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange10(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[9].data = newValue.value;
      if(newValue.value == ''){
        this.qn10 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange11(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[10].data = newValue.value;
      if(newValue.value == ''){
        this.qn11 = null
      }
    }

    console.log('final data: ', this.entry.data)
  }

  onChange12(newValue: any){
    var test = false
    

    this.entry.data.forEach((entry, index) => {
      if(entry.data !== ''){
        if(entry.data == newValue.value){
          test = true
        }
      }
    })

    if(test){
      test = false
      newValue.value = null
      alert('Stock detail already exist')
    } else {
      this.entry.data[11].data = newValue.value;
      if(newValue.value == ''){
        this.qn12 = null
      }
    }

    console.log('final data: ', this.entry.data)
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
        this.hideTable = false;
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

  sendData(data:any[]){

    var kod1=0
    var kod2=0
    var kod3=0
    var kod4=0
    var kod5=0
    var kod6=0
    var kod7=0
    var kod8=0
    var kod9=0
    var kod10=0
    var kod11=0
    var kod12=0
    var kod13=0
    var kod14=0
    var kod15=0
    var kod16=0
    var kod17=0
    var kod18=0
    var kod19=0
    var kod20=0
    var kod21=0
    var kod22=0
    var kod23=0
    var kod24=0
    var kod25=0
    var kod26=0
    var kod27=0
    var kod28=0
    
    data.forEach(item =>{
      if (item.data !== ''){
        switch(item.data){
          case 'Biohazard_bag': {
            kod1 = item.value
            break
          }
          case 'Gel_Tube': {
            kod2 = item.value
            break
          }
          case 'EDTA_Tube': {
            kod3 = item.value
            break
          }
          case 'Gluc_Tube': {
            kod4 = item.value
            break
          }
          case 'Coag_Tube': {
            kod5 = item.value
            break
          }
          case 'urine_container': {
            kod6 = item.value
            break
          }
          case 'Paeds_Gel': {
            kod7 = item.value
            break
          }
          case 'Paeds_FBC': {
            kod8 = item.value
            break
          }
          case 'Paeds_EDTA': {
            kod9 = item.value
            break
          }
          case 'Stool_Container': {
            kod10 = item.value
            break
          }
          case 'Swab_Amies_gel': {
            kod11 = item.value
            break
          }
          case 'Swab_Carry_Blair': {
            kod12 = item.value
            break
          }
          case 'ESR_Tube': {
            kod13 = item.value
            break
          }
          case '24h_urine_container_(BOX)': {
            kod14 = item.value
            break
          }
          case 'C&S_Aerobic': {
            kod15 = item.value
            break
          }
          case 'C&S_Anaerobic': {
            kod16 = item.value
            break
          }
          case 'C&S_Peads': {
            kod17 = item.value
            break
          }
          case 'C&S_Fungal': {
            kod18 = item.value
            break
          }
          case 'Lithium_Heparin_Tube': {
            kod19 = item.value
            break
          }
          case 'G6PD_Paper': {
            kod20 = item.value
            break
          }
          case 'Blood_Spot_Paper': {
            kod21 = item.value
            break
          }
          case 'Foam_Box': {
            kod22 = item.value
            break
          }
          case 'Parafilm': {
            kod23 = item.value
            break
          }
          case 'Bijoue_bottle': {
            kod24 = item.value
            break
          }
          case 'Glass_slides': {
            kod25 = item.value
            break
          }
          case 'Microscope_Slide': {
            kod26 = item.value
            break
          }
          case 'Plain_tube_with_red_stopper': {
            kod27 = item.value
            break
          }
          case 'Sodium_Heparin_tube': {
            kod28 = item.value
            break
          }
        }
      }
    })


    
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
          alert('Data is sent succesfully!');
          console.log('im in here')
        } else {
          this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
          alert('Something is wrong, data is not saved. Please contact Encik Sayed!');
        }
        console.log('after: ', status)
      })
      .catch((error)=>{
        console.error('the error is: ', error);
        this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
        alert('Something is wrong, data is not saved. Please contact Encik Sayed!');
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
