import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quote.interface';


@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  baseUrl: string = 'https://type.fit/api/quotes';

  constructor( private http: HttpClient ) {}

  getQuotes():Observable<Quote[]> {
    return this.http.get<Quote[]>( this.baseUrl )
    
  }  
  
}
