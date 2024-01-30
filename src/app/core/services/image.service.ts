import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';

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
      })
    )
  }
}
