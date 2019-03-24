import { Component, OnInit, Input } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { response } from '../newsresponse';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  @Input() category : string="Sports";
  resp: response;
  constructor(private newsservice: NewsapiService) { }

  ngOnInit() {
    this.newsservice.getNewsHeadline(this.category).subscribe(rep =>
      this.resp=rep);
  }
}