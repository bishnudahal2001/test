import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amplify-app';
  constructor(private readonly _http: HttpClient) {
    _http.get('https://2xmk4kt2r2.execute-api.us-east-1.amazonaws.com/dev/home').subscribe((message) => {
    console.log(message);
    this.title = message as string;
    
    })

  }
}
