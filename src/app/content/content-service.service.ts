import { inject, Injectable } from '@angular/core';
import { ContentSampleData } from './content-sample-data';
import { Article } from './article/article';
import { catchError, first, firstValueFrom, map, Observable, take, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private http = inject(HttpClient);

  baseUrl = Environment.ContentApiUrl;
  
  articles: Article[] = [];
  tips: any;
  constructor() { 
    console.log('Content Service Initialized');    
    this.tips = ContentSampleData.tips;
  }
  getArticles(sortBy: string='views'): Observable<Article[]> {
    var articles$ = this.http.get<Article[]>(this.baseUrl + '/articles');
    return articles$.pipe(
      map((articles: Article[]) => articles.sort((a: any, b: any) => b[sortBy as keyof Article] - a[sortBy as keyof Article])),
      take(10)
    )    
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
