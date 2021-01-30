import { Component, OnInit  } from '@angular/core';

// Services
import { HttpService } from './global/http/http.service';

// Interfaces
import { jsonPlaceholderPostPayload } from './global/interfaces/posts/jsonPlaceholderPostPayload';
import { gorestPostPayload } from './global/interfaces/posts/GorestPostPayload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  constructor(private httpService: HttpService) { }

  requestType:string = "";
  topMessage:string = "Press a button to make a request";
  posts:any = [];

  /*-------------------------------------------------------------------------------------------*/
  onOpen(event: any) {
    console.log(event);
  }

  onOpened(event: any) {
    console.log(event);
  }
  /*--------------------------------------------------------------------------------------------------*/

  getJsonPlaceholderPosts(){
    console.log("getJsonPlaceholderPosts");
    this.topMessage = "Posts from JSON Placeholder";
    this.requestType = "GET";
    this.httpService.getPostsFromJsonPlaceholder().subscribe((data:jsonPlaceholderPostPayload[]) => {
      this.posts = data;
      console.log("data is: ", this.posts);
    })
  }

  getGorestPosts(){
    console.log("getGorestPosts");
    this.topMessage = "Posts from Gorest.co.in";
    this.requestType = "GET";
    this.httpService.getPostsFromGorest().subscribe((data:gorestPostPayload) => {
      console.log("data is: ", data.data);
      this.posts = data.data;
    })
  }

  getPostsFromBothSites(){
    console.log("getPostsFromBothSites");
    this.topMessage = "Posts from both sites";
    this.requestType = "GET";
    this.httpService.getAllPosts().subscribe((data) => {
      this.posts = data;
    })
  }

  sendPostToJsonPlaceholder(){
    console.log("sendPostToJsonPlaceholder");
    this.topMessage = "Send new post to JSON Placeholder";
    this.requestType = "POST";
  }

  sendPost(){
    console.log("sending POST request");
  }

}
