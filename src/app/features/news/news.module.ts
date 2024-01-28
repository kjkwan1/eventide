import { NgModule } from "@angular/core";
import { NewsComponent } from "./components/news/news.component";
import { CommonModule } from "@angular/common";
import { NewsRoutingModule } from "./news-routing.module";
import { BannerComponent } from "./components/banner/banner.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        NewsComponent,
        BannerComponent,
        HeaderComponent,
    ],
    imports: [
      CommonModule,
      NewsRoutingModule
    ],
  })
  export class NewsModule { }