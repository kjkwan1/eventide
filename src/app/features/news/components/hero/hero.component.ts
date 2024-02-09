import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaStackArticle } from '../../model/news-model';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'news-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() public set headline(article: MediaStackArticle | null) {
    if (article) {
      this.article = article;
      this.articleImage$ = this.imageService.getImage(article.image);
    }
  };

  public article!: MediaStackArticle;
  public articleImage$!: Observable<SafeUrl | null>;
  constructor(private imageService: ImageService) {}
}
