import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsblog';
  // genre: string='sports';
  categories:string[]=['Home','Business','Entertainment','Health','Science','Sports','Technology'];

  // getcategory(category: string){
  //   this.genre = category;
  //   // console.log(this.genre);
  // }

}
