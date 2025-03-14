import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ContentSampleData } from './content-sample-data';
import { Article } from './article/article';
import { ContentServiceService } from './content-service.service';
import { map, Observable, take, tap } from 'rxjs';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ MatCardModule, MatIcon, MatButton, CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit  {  
  private contentService = inject(ContentServiceService);

  contentTypes = ContentSampleData.contentTypes;
  articlesSignal = signal<Article[]>([]);
  terms = ContentSampleData.terms;
  tips = ContentSampleData.tips;
  tags = ContentSampleData.tags;

  articles$: Observable<Article[]> = new Observable<Article[]>();
  isArticleLoading = true;

  ngOnInit() {  
    // this.articles$ = this.contentService.getArticles('likes').pipe(
    //   tap(() => this.isArticleLoading = false)
    // );

    this.loadAllArticles();
  }

  articles: Article[] = [];

  loadAllArticles() {
    // this.articles$ = this.contentService.getAllArticles().pipe(
    //   tap(() => this.isArticleLoading = false)
    // );

    this.contentService.getAllArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
        console.log('Articles loaded successfully:', articles);
        this.isArticleLoading = false;
      },
      error: (error) => console.error('Error loading articles:', error)
    });
  }
}
