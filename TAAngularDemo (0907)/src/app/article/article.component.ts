import { UserService } from './../user.service';
import { Component } from '@angular/core';
import {Article} from '../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  nowDate = new Date();
  //1
    // 1. ngIf else 教學
    isPopular = false;
    isDisabled= false;
  router: any;
    changePopular() {
      this.isPopular = true;
    }

    changeNormal() {
      this.isPopular = false;
    }

    // 2. ngFor 教學
    popularArticles:Article[] = [{ title: '熱門一', content: '熱門內容11111111' }];
    normalArticles = [{ title: '一般一', content: '一般內容111111111' }];
    addNewArticle() {
      this.popularArticles.push({ title: '熱門New', content: '熱門內容New11111111' });
      this.normalArticles.push({ title: '一般New', content: '一般內容New11111111' })
    }

    // 3. ngStyle 教學
    fontSize = 50;

    // 4. ngClass 教學
    isRed = true;

    // 5. ngSwitch 教學
    score = 100;

  //1
  // --------------
  //2


  //2
  // --------------

  // constructor(private userService:UserService){
  //   this.userService.getAPI().subscribe((data)=>{
  //     this.popularArticles=data;
  //   })
  // }
  test(para:string){
    this.router.navigate(['signup/${para}'])
  }
  text: string = 'Always bet on Prime!';
  public price: number = 1234.5;
  public today: Date = new Date();
}
