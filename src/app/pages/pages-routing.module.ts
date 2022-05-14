import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotePageComponent } from './quote-page/quote-page.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'quote', component: QuotePageComponent },
      { path: '**', redirectTo: 'quote'}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
