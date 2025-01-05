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

@Component({
  selector: 'app-article',
  providers: [provideNativeDateAdapter()],
  imports: [MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatDatepickerModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  articleId: number = 0;
  article: any;
  submitAction: string = 'Save';
  
  constructor(private route: ActivatedRoute, private contentServiceService: ContentServiceService, private router: Router) {
    this.route.params.subscribe(params => {
      this.articleId = params['id'] ?? 0;
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
    this.value.set(this.article.title);
  }

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  articleFormGroup = new FormBuilder().group({
    id: 0,
    title: '',
    description: '',    
    author: '',
    date: '',
    views: '',
    likes: '',
    comments: ''
  });

  onSubmit() {
    console.log(this.articleFormGroup.value);
    if(this.articleId === 0)
    {
      this.articleFormGroup.value.id = this.contentServiceService.articles.length + 1;
      this.contentServiceService.addArticle(this.articleFormGroup.value);
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

}
