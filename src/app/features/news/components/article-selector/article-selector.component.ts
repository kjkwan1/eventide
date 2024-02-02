import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsBaseCategories } from '../../enum/news';

@Component({
  selector: 'app-article-selector',
  standalone: true,
  imports: [],
  templateUrl: './article-selector.component.html',
  styleUrl: './article-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSelectorComponent {
  public categories = NewsBaseCategories;
}
