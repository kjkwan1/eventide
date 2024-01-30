import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../../model/news-model';

@Component({
  selector: 'news-article-content',
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleContentComponent {
  @Input() article!: Article;
}
