import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
