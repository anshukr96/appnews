import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from './newsresponse';

const httpOptions = {
  headers: new HttpHeaders({ 'X-Api-Key': '42e8fb22b1cb4cdebc90d4e722c27bb2' })
};

const news_api_url = 'https://newsapi.org/v2/top-headlines';

@Injectable()
export class NewsapiService {

  constructor(private http: HttpClient) {}

  getNewsHeadline(category:string):Observable<response>{
    
    let categoryUrl=news_api_url+"?country=in&category="+category;
    if(category=='Home'){
      categoryUrl=news_api_url+"?country=in";
    }
    return this.http.get<response>(categoryUrl,httpOptions);
  }
}