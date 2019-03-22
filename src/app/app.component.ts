import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsblog';
  genre: string;

  getcategory(category: string){
    this.genre = category;
  }

}
