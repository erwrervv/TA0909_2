import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './interfaces/article';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  inputAccount = 'example!!!';
  inputPwd = '123!!!';
  inputaNumber = 10;
  constructor(private httpclient: HttpClient) {}

  getAccount() {
    return {
      inputAccount: this.inputAccount,
      inputPwd: this.inputPwd,
    };
  }
  getAPI() {
    this.httpclient.post('',{})

  return this.httpclient.get<Article[]>('https://localhost:7064/api/Article');
  }
  compare() {
    if (this.inputaNumber >= 5) {
      return true;
    } else {
      return false;
    }
  }
}
