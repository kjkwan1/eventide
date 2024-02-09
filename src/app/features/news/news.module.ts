import { NgModule } from "@angular/core";
import { NewsComponent } from "./components/news/news.component";
import { CommonModule } from "@angular/common";
import { NewsRoutingModule } from "./news-routing.module";
import { BannerComponent } from "./components/banner/banner.component";
import { HeaderComponent } from "./components/header/article-header.component";
import { ArticleComponent } from "./components/article/article.component";
import { ArticleContentComponent } from "./components/article/article-content/article-content.component";
import { NewsService } from "./news.service";
import { ArticleSelectorComponent } from "./components/article/article-selector/article-selector.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeroComponent } from "./components/hero/hero.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ArticleMedComponent } from "./components/article-med/article-med.component";

@NgModule({
    declarations: [
        NewsComponent,
        BannerComponent,
        HeaderComponent,
        HeroComponent,
        ArticleComponent,
        ArticleContentComponent,
        ArticleMedComponent,
        ArticleSelectorComponent,
    ],
    imports: [
      CommonModule,
      NewsRoutingModule,
      ReactiveFormsModule,
      SharedModule,
    ],
    providers: [
      NewsService,
    ]
  })
  export class NewsModule { }