import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-share-input',
  templateUrl: './share-input.component.html',
  styleUrls: ['./share-input.component.css']
})
export class ShareInputComponent {
  // 1. input/output
  @Input() inputAccount = 'example';
  @Input() inputPwd = '123';
  @Input() inputaNumber = 10;
  @Input() userinfo = {
    age:10,
  };
  @Input()user = {
    account: "account",
    password: "舊的",
  };
  @Output() comfirmData = new EventEmitter();
  // 1. input/output
  @Output() comfirmDatatitle = new EventEmitter();
  constructor(){
    console.log('constructor');
  }

  // 2. Hook / construct (input參數改成物件 觀察OnChanges變化)
  @Input() inputUser = {
    inputAccount:'',
    inputPwd:''
  };

  ngOnInit(){
    //......api
    console.log('ngOnInit');
  }

  // ngOnChanges(change : SimpleChanges){
  //   if(change['account'] && change['account'].currentValue)
  //   console.log('ngOnChanges',change);
  // }

  // ngDoCheck(){
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy');
  // }

  comfirm() {
    this.comfirmData.emit({ account: this.inputAccount, pwd: this.inputPwd , num:this.inputaNumber});
  }
  // comfirm2() {
  //   this.comfirmDatatitle.emit({ show: this});
  // }
}
