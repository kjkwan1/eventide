import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDatabase } from './services/news-database/news.database';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [NewsDatabase],
})
export class DatabaseModule { }
