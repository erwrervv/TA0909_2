import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArticleComponent } from './article/article.component';
import { Practice3Component } from './practice3/practice3.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice1Component } from './practice1/practice1.component';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [{
  path:'home/:',
  component:HomeComponent,
}
// ,{ path:'login/:',
//   component:LoginComponent,
// },{
//   path:'signup/:id/:id2',
//   component:SignupComponent,
// }
,
{
  path:'articleoverview/:id',
  component: ArticleoverviewComponent,
},
{
  path:'homepage',
  component:HomepageComponent,
},
{
  path:'**',
  component:LoginComponent,
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
