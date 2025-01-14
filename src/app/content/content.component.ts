import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ContentSampleData } from './content-sample-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Article } from './article/article';

@Component({
  selector: 'app-content',
  imports: [HttpClientModule, MatCardModule, MatIcon, MatButton, CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  private http = inject(HttpClient);

  contentTypes = ContentSampleData.contentTypes;
  articles = signal<Article[]>([]);
  terms = ContentSampleData.terms;
  tips = ContentSampleData.tips;
  tags = ContentSampleData.tags;

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.http.get<Article[]>('http://localhost:3004/articles')
    .subscribe((articles: Article[]) => {
      this.articles.set(articles); 
      this.sortArticlesByViews();
    });
  }

  sortArticlesByViews(): void {    
    this.articles.update(articles => articles.sort((a, b) => b.views - a.views));
  }
}
  