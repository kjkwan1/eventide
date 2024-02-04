import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsBaseCategories } from '../../enum/news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'article-selector',
  templateUrl: './article-selector.component.html',
  styleUrl: './article-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSelectorComponent {
  public categories = Object.values(NewsBaseCategories);
  public showMenu: boolean = false;
  constructor(private newsService: NewsService) {}

  public onSelect(category: NewsBaseCategories) {
    this.newsService.selectCategory(category);
  }

  public toggle() {
    this.showMenu = !this.showMenu;
  }
}
