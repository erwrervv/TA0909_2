import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAAngularDemo';
  text="";
  constructor(private router :Router){

  }
  goLogin(){
    // this.router.navigateByUrl('123')
    this.router.navigate(['login']);
    //可以用陣列
  }
  goSignUP(){
    this.router.navigate(['signup/111/22'],
    {
      queryParams:{
        account:'222'
      },

    });
  }
  goArticle(){
    this.router.navigate(['article']);
  }
}
