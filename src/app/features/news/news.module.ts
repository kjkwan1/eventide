import { NgModule } from "@angular/core";
import { NewsComponent } from "./components/news/news.component";
import { CommonModule } from "@angular/common";
import { NewsRoutingModule } from "./news-routing.module";
import { BannerComponent } from "./components/banner/banner.component";
import { HeaderComponent } from "./components/header/article-header.component";
import { ArticleComponent } from "./components/article/article.component";
import { ArticleContentComponent } from "./components/article/article-content/article-content.component";
import { NewsService } from "./news.service";
import { ArticleSelectorComponent } from "./components/article-selector/article-selector.component";

@NgModule({
    declarations: [
        NewsComponent,
        BannerComponent,
        HeaderComponent,
        ArticleComponent,
        ArticleContentComponent,
        ArticleSelectorComponent,
    ],
    imports: [
      CommonModule,
      NewsRoutingModule
    ],
    providers: [
      NewsService,
    ]
  })
  export class NewsModule { }