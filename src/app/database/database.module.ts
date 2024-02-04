import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDatabase } from './services/news-database/news.database';
import { MetadataDatabase } from './services/metadata-database/metadata-database';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [NewsDatabase, MetadataDatabase],
})
export class DatabaseModule { }
