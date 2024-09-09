import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userForm = new FormGroup({
    account:new FormControl('11111',[Validators.required,Validators.maxLength(5)]),
    password: new FormControl('22222'),
    addressInput: new FormControl('地址'),
    info:new FormGroup({
      age:new FormControl(3),
      tall:new FormControl(4),
    }),
    address:new FormArray([new FormControl('5'),
      new FormControl('6')
    ])
  })
constructor(private route :ActivatedRoute){

console.log('params-snapshot',this.route.snapshot.params['id']);
console.log('params-snapshot',this.route.snapshot.paramMap.get('id'));//兩種抓法一樣

this.route.params.subscribe((pa)=>{
  pa['id']
})
console.log('snapshot.queryParams',this.route.snapshot.queryParams['account']);

  this.route.queryParams.subscribe((pa)=>{
    console.log('snapshot.queryParams',pa['account'])
  });
  this.route.queryParams.subscribe((params) => {
    const id = params['id'];  // 直接访问查询参数
    console.log('snapshot.queryParams id:', id);
  });
this.route.snapshot.queryParams['account']
this.route.snapshot.queryParamMap.get('account')
// this.route.queryParams.subscribe((id:Params)=>)
this.route.queryParams.subscribe((pa)=>{
  pa['get']('id')
})
this.route.queryParamMap.subscribe((pa)=>{
  pa.get('id')
})

// ---api 找到id後再binding資料

}
ngOnInit():void{
  ////帳號密碼是否重複
  ////及時檢查輸入的資料
  this.userForm.get('account')?.valueChanges
  .subscribe((data)=>{
console.log('valueChanges',data)
  })

  ////必須和上方的設定型別一樣setValue
  ////patchValue若不一樣就略過，兩者都是用作設定值
  //....api
  // this.userForm.get('account')?.setValue('boy');
  this.userForm.patchValue({
    account:'boy'
  });

}

  // getUserFormAddressFormArray(){
  //   return (this.userForm.get('address') as FormArray).controls;
  // }
  // addFormArray(){
  //   this.getUserFormAddressFormArray().push(new FormControl('999'))
  // }

  ////.pop()
  // removeFormArray(){
  //   this.getUserFormAddressFormArray().pop()
  // }


  getUserFormAddressFormArray() {
    return (this.userForm.get('address') as FormArray).controls;
  }

  // addFormArray() {
  //   const addressArray = this.userForm.get('address') as FormArray;
  //   addressArray.push(new FormControl('999'));
  // }
  addFormArray() {
    let val =this.userForm.get('addressInput')?.value;
    this.getUserFormAddressFormArray().push(new FormControl(val))
  }
  removeFormArray(index: number) {
    const addressArray = (this.userForm.get('address') as FormArray).removeAt(index);
  }
  //解释：
  // removeFormArray(index: number) 方法接收一个 index 参数，这个参数是你点击删除按钮时传递的当前项的索引。
  // 在 HTML 中，通过 *ngFor 循环生成的每个 input 旁边都有一个删除按钮，点击按钮时会调用 removeFormArray(i)，并将对应的索引 i 传递给方法。
  // removeAt(index) 是 FormArray 的方法，用于移除指定索引处的控件。
  // 这样，你点击删除按钮时就能捕捉当前点击的位置，并删除相应的地址项。
  //1. 使用 event 参数捕捉点击位置
  submit(){
    this.userForm.get('account')?.markAsDirty();
    this.userForm.get('account')?.markAsTouched();
    console.log('userForm.value',this.userForm.value);
    console.log('value',this.userForm);
    }
  reset(){
      this.userForm.reset({
        ////保留下方有賦值的值
        account:'boy',
      });
  }
  removeAllAddresses() {
    const addressArray = this.userForm.get('address') as FormArray;
    addressArray.clear(); // 清空 FormArray 中的所有控件
    let val =this.userForm.get('')?.value;
    this.getUserFormAddressFormArray().push(new FormControl(val))
  }

  nodes!: any[];

  selectedNodes: any;


}
