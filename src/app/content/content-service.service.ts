import { Injectable } from '@angular/core';
import { ContentSampleData } from './content-sample-data';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  articles: any;
  tips: any;
  constructor() { 
    console.log('Content Service Initialized');
    this.articles = ContentSampleData.articles;
    this.tips = ContentSampleData.tips;
  }
  getArticles(id: number): any {
    return this.articles.find((a: any) => a.id == id);
  }
  addArticle(article: any) {
    this.articles.push(article);
    console.log('Article added successfully');
  }
  updateArticle(article: any) {
    var art = this.articles.find((a: any) => a.id == article.id);
    art.title = article.title;
    art.description = article.description;
    art.author = article.author;
    art.date = article.date;
    art.views = article.views;
    art.likes = article.likes;
    art.comments = article.comments;
    console.log('Article updated successfully');
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
