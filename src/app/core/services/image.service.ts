import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EMPTY, Observable, catchError, map, throwError } from 'rxjs';
import { MediaStackArticle } from 'src/app/features/news/model/news-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  public getImage(imageUrl: string): Observable<SafeUrl | null> {
    return this.httpClient.get(imageUrl, {
      observe: 'response',
      responseType: 'blob'
    }).pipe(
      map((response: HttpResponse<Blob>) => {
        if (!response || !response.body) {
          return null;
        }
        const unsafeImageUrl = URL.createObjectURL(response.body);
        return this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
      }),
      catchError((error) => {
        return EMPTY;
      })
    )
  }
  // TODO: Implement proper proxy for images, and remove this.
  public validateHeadlineEligibility(article: MediaStackArticle): Observable<MediaStackArticle> {
    return this.httpClient.get(article.image, {
      responseType: 'blob',
      observe: 'response' 
    }).pipe(
      map((response) => {
        const blob = response.body;
        if (!blob) {
          throw response;
        }
        const reader = new FileReader(); // store as Base 64 string
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          article.imageData = reader.result as string;
        };
        return article;
      }),
      catchError(error => {
        return throwError(() => new Error('Invalid image URL', error));
      })
    );
  }
}
