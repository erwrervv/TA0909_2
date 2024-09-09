import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articleoverviews } from './interfaces/articleoverview';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Articleoverviews = 'https://localhost:7003/api/ArticleOverviews'; // 替换为你的实际 URL
 // 替换为你的实际 URL

  constructor(private http: HttpClient) { }
  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.Articleoverviews}/${id}`);
  }
  //取得文字資料
  getArticleOverviews(): Observable<any[]> {
    return this.http.get<any[]>(this.Articleoverviews);
  }

  //  POST、PUT、DELETE
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.Articleoverviews, data);
  }

  putData(data: any): Observable<any> {
    return this.http.put<any>(this.Articleoverviews, data);
  }

  removeData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Articleoverviews}/${id}`);
  }

  getPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.Articleoverviews}/GetPicture/${id}`, { responseType: 'blob' });
  }

}
