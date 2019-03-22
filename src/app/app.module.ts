import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewscardComponent } from './newscard/newscard.component';
import { NewsapiService } from './newsapi.service';

@NgModule({
  declarations: [
    AppComponent,
    NewscardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
