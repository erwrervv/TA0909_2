import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  // //0
  // // 1. ng g c components/login - 產生Component

  // // 2. 展現繫結的功能 - 插值
  // title = '登入首頁';
  // role = '主管';

  // // 3. 展現繫結的功能 - 屬性綁定
  // account = '輸入帳號';
  // pwd = '輸入密碼';

  // // 4. 展現繫結的功能 - 事件綁定
  // comfirm(event : MouseEvent)
  // {
  //   alert(this.account);
  //   console.log('MouseEvent', event);
  //   this.title = this.title + this.role;
  // }

  // // 4. 展現繫結的功能 - 雙向綁定
  // memberCnt = 0;
  // //0

  // --------------
  //1
    /** 標題 */
    title1 = '新增';

    /** 使用者資料 */
    user = {
      account: "",
      password: "",
    };

    /** 顯示使用者資料 */
    showUser = {
      account: "",
      password: ""
    };

    /** 帳號是否可以輸入 */
    isDisable = false;

    /** 送出 */
    submit() {
      if(!(this.user.account && this.user.password))
      {
        alert('必須輸入完整');
        return;
      }

      this.showUser.account = this.user.account;
      this.showUser.password = this.user.password;
    }

    /** 清除 */
    clear() {
      if (!this.isDisable) {
        this.user.account = '';
      }
      this.user.password = '';
    }

    /** 切換新增/修改 */
    switch() {
      this.isDisable = !this.isDisable;
      this.title1 = this.isDisable ? '修改' : '新增';
    }
  //1
  // --------------
  //2
  //2
  // --------------
  //3
  //(父) login.component.ts
    // 7. input/output
    inputAccount = 'example';
    inputPwd = '123';
    inputaNumber =10;
    comfirmData(event: any) {
      console.log('output data :', event);
    }
  //3
  //login.component.ts
  constructor(private userService: UserService) {
    console.log(userService.inputAccount);
    console.log(userService.inputPwd);
    this.inputAccount = userService.getAccount().inputAccount;
    this.inputPwd = userService.getAccount().inputPwd;

    let res= this.userService.compare();
  }
  inputUser = {
    inputAccount: 'HookDemo',
    inputPwd: '123'
  };

  userinfo={
    age :10,
    account:''
  }
  ngOnChanges() {
    this.userinfo = {
      age:999,
      account: 'changeHookDemo2',
      // password: '333'
    }
  }
  test(){
    this.userinfo=
    {
      age:999,
      account:'333'
    };
  }
}
