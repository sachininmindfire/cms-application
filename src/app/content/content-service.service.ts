import { inject, Injectable } from '@angular/core';
import { ContentSampleData } from './content-sample-data';
import { Article } from './article/article';
import { catchError, first, firstValueFrom, map, Observable, take, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Environment } from '../../environments/environment';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  baseUrl = Environment.contentApiUrl;
  private articlsApiUrl = 'http://localhost:5098/api/articles';

  
  articles: Article[] = [];
  tips: any;
  constructor() { 
    console.log('Content Service Initialized');    
    this.tips = ContentSampleData.tips;
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
  }
  
  getAllArticles(): Observable<Article[]> {
    console.log('Making API call to:', this.articlsApiUrl);

    return this.http.get<Article[]>(this.articlsApiUrl).pipe(
      map((articles: Article[]) => {
        console.log('Received articles:', articles);
        return articles;
      }),
      catchError(error => {
        console.error('Error fetching articles:', error);
        return throwError(() => new Error(`Error loading articles: ${error.message}`));
      })
    );
  }

  getArticles(sortBy: string = 'views'): Observable<Article[]> {
    const articleUrl =  `${this.baseUrl}/articles`;
    const headers = this.getHeaders();

    console.log('BaseURL:', this.baseUrl);
    console.log('Full URL:', articleUrl);
    console.log('Token:', this.authService.getToken());
    console.log('Headers:', headers);

    return this.http.get<Article[]>(articleUrl, { headers }).pipe(
      map((articles: Article[]) => {
        console.log('Received articles:', articles);
        return articles.sort((a: any, b: any) => 
          b[sortBy as keyof Article] - a[sortBy as keyof Article]
        );
      }),
      take(10),
      catchError(error => {
        console.error('Error fetching articles:', error);
        return throwError(() => error);
      })
    );
  }
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`).pipe(
      first(),
      map(article => {                
        return {
          ...article,
          date: article.date ? new Date(article.date) : new Date(),
          comments: article.comments?.map(comment => ({
            ...comment,
            date: comment.date ? new Date(comment.date) : new Date()
          })) ?? []
        };
      }),
      catchError(this.handleError)
    );
  }

 handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  addArticle(article: any) {
    this.http.post(this.baseUrl + '/articles', article).subscribe(() => {
      console.log('Article added successfully');
    });
  }
  updateArticle(article: any) {
    this.http.put(this.baseUrl + '/articles/' + article.id, article).subscribe(() => {
      console.log('Article updated successfully');
    });    
  }
  deleteArticle() {
    console.log('Article deleted successfully');
  }
  addTip() {
    console.log('Tip added successfully');
  }
  updateTip() {
    console.log('Tip updated successfully');
  }
  deleteTip() {
    console.log('Tip deleted successfully');
  }
}
