import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { articleReducer } from './store/reducers/news.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/effects/news.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NewsTokenInterceptor } from './core/interceptors/news/news-token.interceptor';
import { InitializationService } from './core/services/initialization/initialization.service';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from './database/database.module';
import { NewsModule } from './features/news/news.module';

export const initializeApp = (initService: InitializationService) => {
  return (): void => initService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ articles: articleReducer }),
    EffectsModule.forRoot(NewsEffects),
    CoreModule,
    DatabaseModule,
    NewsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NewsTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
