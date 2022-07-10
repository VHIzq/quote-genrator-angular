import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from '../interfaces/quote.interface';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private configUrl!: string;

  constructor( private http: HttpClient ) {}

  getQuotes(): Observable<Quote[]> {
    this.configUrl = `${environment.baseUrl}`;
    const quotes = this.http.get<Quote[]>(this.configUrl);
    return quotes;
  }  

  
  
}
