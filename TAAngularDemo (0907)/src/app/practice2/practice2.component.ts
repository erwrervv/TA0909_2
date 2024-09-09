import { Component, Input } from '@angular/core';
import { share } from 'rxjs';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {
      /** 標題 */
      title = '更新';

      /** 使用者資料 */
      user = {
        account: "account",
        password: "舊的",
      };

      // string =user.account.ToTitleCase();
  onchange(){
    this.title='廣告訊息',
    this.user={
      account : this.user.account.toUpperCase(),
      password: "新的",
    }

  }
}
