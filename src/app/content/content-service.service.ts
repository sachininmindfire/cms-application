import { Injectable } from '@angular/core';
import { ContentSampleData } from './content-sample-data';
import { Article } from './article/article';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  articles: Article[];
  tips: any;
  constructor() { 
    console.log('Content Service Initialized');
    this.articles = ContentSampleData.articles.map(article => ({
      ...article,
      date: new Date(article.date),
      comments: article.comments.map(comment => ({
        ...comment,
        date: new Date(comment.date)
      }))
    }));
    this.tips = ContentSampleData.tips;
  }
  getArticles(id: number): Article {
    const article = this.articles.find((a: any) => a.id == id);
    if (!article) {
      throw new Error(`Article with id ${id} not found`);
    }
    return article;
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
