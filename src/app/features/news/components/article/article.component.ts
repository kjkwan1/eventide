import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaStackArticle } from '../../model/news-model';
import { ImageService } from 'src/app/core/services/image.service';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'news-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {
  @Input()
  public set articleInput(article: MediaStackArticle) {
    this.article = article;
    this.articleImage$ = this.imageService.getImage(article.image);
  };

  public article!: MediaStackArticle;
  public articleImage$!: Observable<SafeUrl | null>;
  constructor(private imageService: ImageService) {}

}
