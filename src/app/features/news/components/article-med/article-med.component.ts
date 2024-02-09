import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaStackArticle } from '../../model/news-model';

@Component({
  selector: 'article-med',
  templateUrl: './article-med.component.html',
  styleUrl: './article-med.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleMedComponent {
  @Input() public article!: MediaStackArticle;

  @Input() public index!: number;

  public getStockImage() { // TODO: Remove, testing purposes only
    return `assets/placeholder/news-${this.index}.jpg`;
  }
}
