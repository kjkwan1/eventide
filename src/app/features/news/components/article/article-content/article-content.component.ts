import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaStackArticle } from '../../../model/news-model';

@Component({
  selector: 'article-content',
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleContentComponent {
  @Input() article!: MediaStackArticle;
}
