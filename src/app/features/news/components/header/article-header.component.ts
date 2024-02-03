import { Component, Input } from '@angular/core';
import { MediaStackArticle } from '../../model/news-model';

@Component({
  selector: 'article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class HeaderComponent {
  @Input()
  public article!: MediaStackArticle;
}
