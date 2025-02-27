import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ViewChild, ElementRef } from '@angular/core';
import { clippingParents } from '@popperjs/core';
import { jsPDF } from "jspdf";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { optionMapping } from './utils/constant';

@Component({
  selector: 'app-kewpa',
  templateUrl: './kewpa.component.html',
  styleUrls: ['./kewpa.component.css']
})
export class KewpaComponent implements OnInit {
  @ViewChild('canvas',{static:true}) canvas!: ElementRef;
  @ViewChild('canvas2',{static:true}) canvas2!: ElementRef;

  currentDate: string='';

  constructor(private router:Router){
    const datePipe = new DatePipe('en-US'); // Create an instance manually
    this.currentDate = datePipe.transform(new Date(), 'dd-MM-yyyy') || '';
  }

  canvasOne:any;
  canvasTwo:any;

  topCanvas:any
  leftCanvas:any
  ctx:any

  topCanvas2:any
  leftCanvas2:any
  ctx2:any

  showLogOut:boolean = true;
  showSuccessMessage:boolean = false;
  showSendingMessage:boolean = false;

  staffname:string = '';
  staffjawatan:string = '';

  canvasShow:any = [];
  listItem:any = [];
  currentClient:string = 'none'
  serverReply:string = 'none'
  showEmptyForm:boolean = false;
  showTitleMessage:boolean = true;
  interval:any;
  entryStatus:string = 'Please wait for few seconds! Loading data!'
  currentRecord:any[] = [];
  showStockTable:boolean = false;
  hideKewpaForm:boolean = false;

  approvalStatus:string = 'FALSE';
  statusHTML:string = 'Awaiting for approval'

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

  bn1:any=null;
  bn2:any=null;
  bn3:any=null;
  bn4:any=null;
  bn5:any=null;
  bn6:any=null;
  bn7:any=null;
  bn8:any=null;
  bn9:any=null;
  bn10:any=null;
  bn11:any=null;
  bn12:any=null;

  alertcontent:string='Stock detail already exist';

  catatanJumlah = [
    '0', '1', '2', '3', '4', '',
    '', '', '', '', '', ''
  ]

  entry = {
    "data":[
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
      {
        "data":"",
        "value":0,
        "baki":0,
      },
    ]
  }

  logout(){
    this.router.navigate(['/']);
  }

  login(){
    this.router.navigate(['/']);
  }

  async printCanvas() {
    return new Promise((resolve, reject) => {
        this.canvasTwo.toBlob((blob: Blob | null) => {
            if (!blob) {
                reject("Blob generation failed");
                return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const imgData2 = reader.result as string; // Ensure it's a string

                var pdf = new jsPDF('l', 'mm', [297, 210]);
                pdf.addImage(imgData2, 'PNG', 0, 0, 300, 210);
                pdf.save('bekalan_patho.pdf');
                resolve("PDF Saved Successfully");
            };
            reader.onerror = () => reject("Error reading blob as data URL");
        }, "image/png", 1.0);
    });
  }

  async printCanvasOne(){
    var imgData2 = this.canvasOne.toDataURL("image/png", 1.0);
    var pdf = new jsPDF('l', 'mm', [297, 210]);
    pdf.addImage(imgData2,'PNG',0, 0, 300, 210);
    pdf.save('bekalan.pdf');
  }


 sendDataButton(){
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

  this.entry.data[0].baki = this.bn1
  this.entry.data[1].baki = this.bn2
  this.entry.data[2].baki = this.bn3
  this.entry.data[3].baki = this.bn4
  this.entry.data[4].baki = this.bn5
  this.entry.data[5].baki = this.bn6
  this.entry.data[6].baki = this.bn7
  this.entry.data[7].baki = this.bn8
  this.entry.data[8].baki = this.bn9
  this.entry.data[9].baki = this.bn10
  this.entry.data[10].baki = this.bn11
  this.entry.data[11].baki = this.bn12
  console.log('final data with baki: ', this.entry)

  var checking = false

  //function below check whether data is complete for each row
  this.entry.data.forEach((item, index) => {
    if (item.data !== '' && item.value == null && item.baki == null) {
      checking = true
      console.log('sangkut: ', index)
    }

    if (item.value !== null && item.data == '') {
      checking = true
      console.log('reverse sangkut: ', index)
    }

    if (item.baki !== null && item.data == '') {
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

 //MARK: NgOnInit
  ngOnInit(): void {
    this.canvasOne = this.canvas.nativeElement;
    this.topCanvas = this.canvasOne.offsetTop;
    this.leftCanvas = this.canvasOne.offsetLeft;
    this.ctx = this.canvasOne.getContext('2d');

    this.canvasTwo = this.canvas2.nativeElement;
    this.topCanvas2 = this.canvasTwo.offsetTop;
    this.leftCanvas2 = this.canvasTwo.offsetLeft;
    this.ctx2 = this.canvasTwo.getContext('2d');

    this.start(this.ctx, this.topCanvas, this.leftCanvas, this.canvasOne);

    console.log('active ward: ', environment.ward)
    this.currentClient = environment.ward;

    this.interval = setInterval(() => {
      this.checkServerisUp_thenStart(); 
    }, 4000);
    
  }

  retrieveBox(){
    console.log('value of: ',this.selectedValue1);
  }

  //MARK: StartCanvas1
  async start(ctx: CanvasRenderingContext2D, topCanvas: number, leftCanvas: number, canvas: any){

    var img = new Image();
      img.src = "/assets/kewpa.png";
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1339, 948);
  
        ctx.font = "16px Arial";
        ctx.textAlign = "left";
        ctx.fillText(this.staffname,176,791);
        ctx.fillText(this.staffjawatan,190,814);
        ctx.fillText(this.currentDate,178,837);
        ctx.font = "14px Arial";
        ctx.fillText('(baki stok)',562,374);
        ctx.font = "16px Arial";
      }
  }

  getOptionLabel(value: string): string {
    return optionMapping[value] || "";
  }

  checkNull(value:any):string {
    if(value == null){
      return '';
    } else {
      return value.toString();
    }
  }

  //MARK:OnChange1
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

  checkServerisUp_thenStart(){
    fetch('https://tricky-scratch-parcel.glitch.me')
        .then(response => response.text())
        .then((data)=>{
          console.log('server reply from kewpa page: ',data)
          if(data == 'server is up!'){
            clearInterval(this.interval);
            this.populateDataFromServer();
          }
        })
        .catch(error=>console.error('the error is: ', error)) 
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
        //this.checkServer = false;
        console.log('checkTrue()');
        
        this.showTitleMessage = false;
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
        //this.checkServer = false;
        console.log('checkfalse()');
        
        this.showTitleMessage = false;
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
        this.entryStatus = 'Request for this month already done. Loading data...'
        this.loadEnteredData();
      } else {
        this.showEmptyForm = true;
        this.showTitleMessage = false;
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
    
  }

  //MARK: populate data
  populateDataFromServer(){
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
      const returnedData = JSON.parse(data);
      console.log('the length: ', returnedData[0].length)

      let column_criteria = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83];
      let description = ['BIOHAZ BAG','GEL TUBE','EDTA TUBE','GLUC TUBE','COAG TUBE','URINE CONT','PAEDS GEL', 'PAEDS FBC', 'PAEDS EDTA', 'STOOL CONT', 'SWAB - AMIES (GEL)', 'SWAB - CARRY BLAIR', 'ESR TUBE', '24 HRS URINE CONTAINER (BOX)', 'C&S AEROBIC', 'C&S ANAEROBIC', 'C&S PAEDS', 'C&S FUNGAL', 'LITHIUM HEP TUBE', 'G6PD PAPER', 'BLOOD SPOT PAPER', 'FOAM BOX', 'PARAFILM', 'BIJOUE BOTTLE', 'GLASS SLIDES', 'MICROSCOPE SLIDE', 'PLAIN TUBE + RED STOPER', 'SODIUM HEP TUBE'];
      
      console.log('RETURNED DATA: ', returnedData[0])

      this.approvalStatus = returnedData[0][87]
      this.staffname = returnedData[0][88]
      this.staffjawatan = returnedData[0][89]

      this.start(this.ctx, this.topCanvas, this.leftCanvas, this.canvasOne);

      console.log('approval status: ', this.approvalStatus)

      if (this.approvalStatus == 'TRUE'){
        this.statusHTML = 'Approved'
      }

      column_criteria.forEach((data, index)=>{
        if(returnedData[0][data] == '' || returnedData[0][data] == null){
        } else {
          this.currentRecord.push(
            {
              items:description[index],
              value:Number(returnedData[0][data]),
              baki:Number(returnedData[0][data+1]),
              approval:Number(returnedData[0][data+2])
            }
          )
        }
      })

      this.entryStatus = ''
      this.showTitleMessage = true;
      this.showEmptyForm = true
      this.showStockTable = false;

      console.log('the array contains: ', this.currentRecord)

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
      let colum_criteria = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83];
      let description = ['BIOHAZ BAG','GEL TUBE','EDTA TUBE','GLUC TUBE','COAG TUBE','URINE CONT','PAEDS GEL', 'PAEDS FBC', 'PAEDS EDTA', 'STOOL CONT', 'SWAB - AMIES (GEL)', 'SWAB - CARRY BLAIR', 'ESR TUBE', '24 HRS URINE CONTAINER (BOX)', 'C&S AEROBIC', 'C&S ANAEROBIC', 'C&S PAEDS', 'C&S FUNGAL', 'LITHIUM HEP TUBE', 'G6PD PAPER', 'BLOOD SPOT PAPER', 'FOAM BOX', 'PARAFILM', 'BIJOUE BOTTLE', 'GLASS SLIDES', 'MICROSCOPE SLIDE', 'PLAIN TUBE + RED STOPER', 'SODIUM HEP TUBE'];
      console.log('RETURNED DATA: ', returnedData[0])
      this.approvalStatus = returnedData[0][87]
      console.log('approval status: ', this.approvalStatus)
      if (this.approvalStatus == 'TRUE'){
        this.statusHTML = 'Approved'
      }
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
              value:returnedData[0][data],
              baki:returnedData[0][data+1],
              approval:returnedData[0][data+2]
            }
          )
        }
        this.entryStatus = ''
        this.showTitleMessage = true;
        this.showEmptyForm = true
        this.showStockTable = false;
      })

      console.log('the array contains: ', this.currentRecord)
      console.log('before masuk')

      this.currentRecord.forEach((item: any)=>{
        console.log('selepas masuk')
        if (item.value !== '0'){
          this.canvasShow.push(
            {
              items:item.items,
              value:item.value,
              baki:item.baki,
              approval:item.approval
            }
          )
        }
      });

      console.log('canvasShow: ', this.canvasShow)

      this.canvasTwo = this.canvas2.nativeElement;
      this.topCanvas2 = this.canvasTwo.offsetTop;
      this.leftCanvas2 = this.canvasTwo.offsetLeft;
      this.ctx2 = this.canvasTwo.getContext('2d');

      this.start2(this.ctx2, this.topCanvas2, this.leftCanvas2, this.canvasTwo);

      for (let i = 0; i < returnedData[0].length; i++) {
        console.log('cell data: ',returnedData[0][i]);
      }
    })
    .catch((error)=>{
      console.error('the error is: ', error);
      this.serverReply = 'Something is wrong, data is not saved. Please contact Encik Sayed!'
    })
  }

  async start2(ctx: CanvasRenderingContext2D, topCanvas: number, leftCanvas: number, canvas: any){
    var img = new Image();
    img.src = "/assets/kewpa.png";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1339, 948);

      ctx.font = "16px Arial";
      ctx.textAlign = "left";

      console.log('canvasshow:', this.canvasShow)
      for (let i = 0; i < this.canvasShow.length; i++) {
        ctx.textAlign = "left";
        ctx.fillText(this.canvasShow[i].items,220,398+i*25);
        ctx.textAlign = "center";
        ctx.fillText(this.canvasShow[i].value,490,398+i*25);
        ctx.fillText(this.canvasShow[i].baki,590,398+i*25);
        if(this.approvalStatus == 'TRUE'){
          ctx.fillText(this.canvasShow[i].approval,800,398+i*25);
        }
      }

      ctx.font = "16px Arial";
      ctx.textAlign = "left";
      ctx.fillText(this.staffname,176,791);
      ctx.fillText(this.staffjawatan,190,814);
      ctx.fillText(this.currentClient,120,270);
      ctx.fillText(this.currentDate,178,837);
      ctx.font = "14px Arial";
        ctx.fillText('(baki stok)',562,374);
        ctx.font = "16px Arial";

    }
  }

  //MARK: actual send
  async sendData(data:any[]){

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

    var bkod1=0
    var bkod2=0
    var bkod3=0
    var bkod4=0
    var bkod5=0
    var bkod6=0
    var bkod7=0
    var bkod8=0
    var bkod9=0
    var bkod10=0
    var bkod11=0
    var bkod12=0
    var bkod13=0
    var bkod14=0
    var bkod15=0
    var bkod16=0
    var bkod17=0
    var bkod18=0
    var bkod19=0
    var bkod20=0
    var bkod21=0
    var bkod22=0
    var bkod23=0
    var bkod24=0
    var bkod25=0
    var bkod26=0
    var bkod27=0
    var bkod28=0
    
    data.forEach(item =>{
      if (item.data !== ''){
        switch(item.data){
          case 'Biohazard_bag': {
            kod1 = item.value + this.currentRecord[0].value
            console.log('kod1: ' + kod1)
            bkod1 = item.baki
            break
          }
          case 'Gel_Tube': {
            kod2 = item.value + this.currentRecord[1].value
            bkod2 = item.baki
            break
          }
          case 'EDTA_Tube': {
            kod3 = item.value + this.currentRecord[2].value
            bkod3 = item.baki
            break
          }
          case 'Gluc_Tube': {
            kod4 = item.value + this.currentRecord[3].value
            bkod4 = item.baki
            break
          }
          case 'Coag_Tube': {
            kod5 = item.value + this.currentRecord[4].value
            bkod5 = item.baki
            break
          }
          case 'urine_container': {
            kod6 = item.value + this.currentRecord[5].value
            bkod6 = item.baki
            break
          }
          case 'Paeds_Gel': {
            kod7 = item.value + this.currentRecord[6].value
            bkod7 = item.baki
            break
          }
          case 'Paeds_FBC': {
            kod8 = item.value + this.currentRecord[7].value
            bkod8 = item.baki
            break
          }
          case 'Paeds_EDTA': {
            kod9 = item.value + this.currentRecord[8].value
            bkod9 = item.baki
            break
          }
          case 'Stool_Container': {
            kod10 = item.value + this.currentRecord[9].value
            bkod10 = item.baki
            break
          }
          case 'Swab_Amies_gel': {
            kod11 = item.value + this.currentRecord[10].value
            bkod11 = item.baki
            break
          }
          case 'Swab_Carry_Blair': {
            kod12 = item.value + this.currentRecord[11].value
            bkod12 = item.baki
            break
          }
          case 'ESR_Tube': {
            kod13 = item.value + this.currentRecord[12].value
            bkod13 = item.baki
            break
          }
          case '24h_urine_container_(BOX)': {
            kod14 = item.value + this.currentRecord[13].value
            bkod14 = item.baki
            break
          }
          case 'C&S_Aerobic': {
            kod15 = item.value + this.currentRecord[14].value
            bkod15 = item.baki
            break
          }
          case 'C&S_Anaerobic': {
            kod16 = item.value + this.currentRecord[15].value
            bkod16 = item.baki
            break
          }
          case 'C&S_Peads': {
            kod17 = item.value + this.currentRecord[16].value
            bkod17 = item.baki
            break
          }
          case 'C&S_Fungal': {
            kod18 = item.value + this.currentRecord[17].value
            bkod18 = item.baki
            break
          }
          case 'Lithium_Heparin_Tube': {
            kod19 = item.value + this.currentRecord[18].value
            bkod19 = item.baki
            break
          }
          case 'G6PD_Paper': {
            kod20 = item.value + this.currentRecord[19].value
            bkod20 = item.baki
            break
          }
          case 'Blood_Spot_Paper': {
            kod21 = item.value + this.currentRecord[20].value
            bkod21 = item.baki
            break
          }
          case 'Foam_Box': {
            kod22 = item.value + this.currentRecord[21].value
            bkod22 = item.baki
            break
          }
          case 'Parafilm': {
            kod23 = item.value + this.currentRecord[22].value
            bkod23 = item.baki
            break
          }
          case 'Bijoue_bottle': {
            kod24 = item.value + this.currentRecord[23].value
            bkod24 = item.baki
            break
          }
          case 'Glass_slides': {
            kod25 = item.value + this.currentRecord[24].value
            bkod25 = item.baki
            break
          }
          case 'Microscope_Slide': {
            kod26 = item.value + this.currentRecord[25].value
            bkod26 = item.baki
            break
          }
          case 'Plain_tube_with_red_stopper': {
            kod27 = item.value + this.currentRecord[26].value
            bkod27 = item.baki
            break
          }
          case 'Sodium_Heparin_tube': {
            kod28 = item.value + this.currentRecord[27].value
            bkod28 = item.baki
            break
          }
        }
      }
    })

    data.forEach((item: any)=>{
      console.log('selepas masuk:', item.value)
      if (item.value !== 0){
        this.canvasShow.push(
          {
            items:this.getOptionLabel(item.data),
            value:this.checkNull(item.value),
            baki:this.checkNull(item.baki),
          }
        )
      }
    });

    await this.start2(this.ctx2, this.topCanvas2, this.leftCanvas2, this.canvasTwo);

    this.showSendingMessage = true;
    this.showEmptyForm = false;
    this.showLogOut = false

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
          bnum1:bkod1, 
          bnum2:bkod2,
          bnum3:bkod3,
          bnum4:bkod4,
          bnum5:bkod5,
          bnum6:bkod6,
          bnum7:bkod7,
          bnum8:bkod8,
          bnum9:bkod9,
          bnum10:bkod10,
          bnum11:bkod11,
          bnum12:bkod12,
          bnum13:bkod13,
          bnum14:bkod14,
          bnum15:bkod15,
          bnum16:bkod16,
          bnum17:bkod17,
          bnum18:bkod18,
          bnum19:bkod19,
          bnum20:bkod20,
          bnum21:bkod21,
          bnum22:bkod22,
          bnum23:bkod23,
          bnum24:bkod24,
          bnum25:bkod25,
          bnum26:bkod26,
          bnum27:bkod27,
          bnum28:bkod28,
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
        this.showSendingMessage = false;
        this.showSuccessMessage = true;
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
          this.serverReply = 'Data is sent sucessfully bapak!'
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
