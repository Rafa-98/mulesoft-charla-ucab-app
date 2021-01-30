import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  getPostsFromJsonPlaceholder(){
    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.http.get('http://posts-api.us-e2.cloudhub.io/jsonplaceholder/posts');
  }

  getPostsFromGorest(){
    return this.http.get('http://posts-api.us-e2.cloudhub.io/gorest/posts');
  }

  getAllPosts(){
    return this.http.get('http://posts-api.us-e2.cloudhub.io/posts');
  }

}
