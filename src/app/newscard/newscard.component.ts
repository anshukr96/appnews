import { Component, OnInit, Input } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { response } from '../newsresponse';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  // category : string;
  resp: response;
  constructor(
    private route: ActivatedRoute,
    private newsservice: NewsapiService) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    console.log(category);
    this.newsservice.getNewsHeadline(category).subscribe(rep =>
      this.resp=rep);
  }
}