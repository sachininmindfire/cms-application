import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentServiceService } from '../content-service.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { Article } from './article';
import {MatListModule} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import {NgxWigModule} from 'ngx-wig';

@Component({
  selector: 'app-article',
  providers: [provideNativeDateAdapter()],
  imports: [NgxWigModule, MatListModule, MatIcon, MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatDatepickerModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  articleId: number = 0;
  article: Article = { id: 0, title: '', description: '', author: '', date: new Date(), views: 0, likes: 0, comments: [] };
  submitAction: string = 'Save';
  articleFormGroup;
  protected readonly titleSignal = signal('');
  protected readonly descriptionSignal = signal('');
  
  constructor(private route: ActivatedRoute, private contentServiceService: ContentServiceService, private router: Router, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'] ?? 0;
    });
    this.articleFormGroup = this.fb.group({
      id: [this.article.id],
      title: [this.article.title],
      description: [this.article.description],
      author: [this.article.author],
      date: [this.article.date],
      views: [this.article.views],
      likes: [this.article.likes],
      comments: this.fb.array(this.article.comments.map(comment => this.fb.group({
        id: [comment.id],
        articleId: [comment.articleId],
        comment: [comment.comment],
        date: [comment.date],
        isActive: [comment.isActive]
      })))
    });
  }
  
  ngOnInit() {   
    if(this.articleId > 0)
      this.FetchAndLoadArticleInForm()
  }

  FetchAndLoadArticleInForm() {
    this.article = this.contentServiceService.getArticles(this.articleId);    
    this.articleFormGroup.patchValue(this.article);
    this.articleFormGroup.markAsPristine();
    this.titleSignal.set(this.article.title);
    this.descriptionSignal.set(this.article.description);
  }  

  protected onInput(event: Event) {
    this.titleSignal.set((event.target as HTMLInputElement).value);
  }

  protected onDescriptionChange(event: string) {
    this.descriptionSignal.set(event);
  }
  
  onSubmit() {
    console.log(this.articleFormGroup.value);
    if(this.articleId === 0)
    {
      this.articleFormGroup.value.id = this.contentServiceService.articles.length + 1;
      this.contentServiceService.addArticle(this.articleFormGroup.value);
      if (this.submitAction === 'saveAndClose')     
        this.router.navigate(['/content']);    
      else
        this.router.navigate(['/content/article', this.articleFormGroup.value.id]);   
    }
    else
    { 
      this.contentServiceService.updateArticle(this.articleFormGroup.value);
      if (this.submitAction === 'saveAndClose') {      
        this.router.navigate(['/content']);    
      }                 
    }

    this.articleFormGroup.markAsPristine();
  }
    
  OnCancel() {
    this.FetchAndLoadArticleInForm();
  }

  OnGoToContentPage() {
    this.router.navigate(['/content']);
  }

  SetSubmitAction(action: string) {
    this.submitAction = action;
  }
  showInfo() {
    alert('This is a sample article');
  }
}
