import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ArticleoverviewComponent } from './component/articleoverview/articleoverview.component';
import { HomeComponent } from './component/home/home.component';
import { DataService } from './data.service';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticlePostComponent } from './component/article-post/article-post.component';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogintaComponent } from './component/loginta/loginta.component';
@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    ArticleoverviewComponent,
    HomeComponent,
    CommentListComponent,
    ArticleListComponent,
    ArticlePostComponent,
    LogintaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    EditorModule,
    DropdownModule,
    TabViewModule,
    RadioButtonModule,
    BrowserModule,
    FormsModule,
    EditorModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
