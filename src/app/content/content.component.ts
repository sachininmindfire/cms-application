import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ContentSampleData } from './content-sample-data';

@Component({
  selector: 'app-content',
  imports: [MatCardModule, MatIcon, MatButton, CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  contentTypes = ContentSampleData.contentTypes;
  articles = ContentSampleData.articles;
  terms = ContentSampleData.terms;
  tips = ContentSampleData.tips;
  tags = ContentSampleData.tags;
}
  