import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewsBaseCategories } from '../../../enum/news';
import { NewsService } from '../../../news.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'article-selector',
  templateUrl: './article-selector.component.html',
  styleUrl: './article-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleSelectorComponent {
  public categories = Object.values(NewsBaseCategories);
  public showMenu: boolean = false;
  public filterForm = new FormGroup({
    selectedCategory: new FormControl(NewsBaseCategories.GENERAL),
  });

  constructor(private newsService: NewsService) {}

  public onSelect(category: NewsBaseCategories) {
    this.newsService.selectCategory(category);
  }

  public toggle() {
    this.showMenu = !this.showMenu;
  }

  public onSubmit() {
    const category = this.filterForm.value.selectedCategory;
    if (category) {
      this.newsService.selectCategory(category);
    }
  }
}
