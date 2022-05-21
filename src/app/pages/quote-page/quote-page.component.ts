import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote.interface';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styles: []
})
export class QuotePageComponent implements OnInit {

  quotes: Quote[] = [];
  constructor( private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  newQuote() {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        console.log(quotes.slice(0, 2));
         this.quotes = quotes.slice(0, 2);
      })

  }


}
