import { Component, Input } from '@angular/core';
import { Article } from '../../model/news-model';

@Component({
  selector: 'news-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public article!: Article;
}
