import { inject, Injectable } from '@angular/core';
import { ContentSampleData } from './content-sample-data';
import { Article } from './article/article';
import { first, firstValueFrom, map, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private http = inject(HttpClient);
  
  articles: Article[] = [];
  tips: any;
  constructor() { 
    console.log('Content Service Initialized');    
    this.tips = ContentSampleData.tips;
  }
  getArticles(sortBy: string='views'): Observable<Article[]> {
    var articles$ = this.http.get<Article[]>('http://localhost:3004/articles');
    return articles$.pipe(
      map((articles: Article[]) => articles.sort((a: any, b: any) => b[sortBy as keyof Article] - a[sortBy as keyof Article])),
      take(10)
    )    
  }
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article[]>(`http://localhost:3004/articles?id=${id}`).pipe(
      first(),
      map(articles => {
        const article = articles[0];
        return {
          ...article,
          date: new Date(article.date),
          comments: article.comments?.map(comment => ({
            ...comment,
            date: new Date(comment.date)
          }))
        };
      })
    );
  }
  addArticle(article: any) {
    this.articles.push(article);
    console.log('Article added successfully');
  }
  updateArticle(article: any) {
    var art = this.articles.find((a: any) => a.id == article.id);
    if (art) {
      art.title = article.title;
      art.description = article.description;
      art.author = article.author;
      art.date = article.date;
      art.views = article.views;
      art.likes = article.likes;
      art.comments = article.comments;
      console.log('Article updated successfully');
    } else {
      console.log('Article not found');
    }
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
