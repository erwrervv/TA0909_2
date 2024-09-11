import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [{
  path:'homepage/:',
  component:HomepageComponent,
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
},];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
