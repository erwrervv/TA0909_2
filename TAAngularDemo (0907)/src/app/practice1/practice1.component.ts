import { Component } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component {
  /** 標題 */
  title = '新增';

  /** 使用者資料 */
  user = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料 */
  showUser = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料清單 */
  showUserList:
    {
      account: string,
      password: string
    }[] = [];

  /** 帳號是否可以輸入 */
  isDisable = false;

  /** 帳號是否可以輸入 */
  isDuplicate = false

  /** 送出 */
  submit() {
    if (!(this.user.account && this.user.password)) {
      alert('必須輸入完整');
      return;
    }

    this.showUser.account = this.user.account;
    this.showUser.password = this.user.password;

    if (this.showUserList.findIndex(x => x.account === this.showUser.account) != -1) {
      this.isDuplicate = true
    } else {
      this.showUserList.push(
        {
          account: this.user.account,
          password: this.user.password
        });
      this.isDuplicate = false;
    }
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
    this.title = this.isDisable ? '修改' : '新增';
  }
}
