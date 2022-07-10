import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote.interface';
import { QuoteService } from 'src/app/services/quote.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styles: [],
})
export class QuotePageComponent implements OnInit {
  quotes: Quote[] = [];
  oneQuote!: any;
  
  
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
   this.getQuotes();
  }

  getQuotes() {
    this.quoteService.getQuotes().subscribe((data: Quote[]) => {
      this.quotes = data;
      this.oneQuote = _.sample(this.quotes);
    });
  }
}
