import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [MatCardModule, MatIcon, MatButton, CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  contentTypes = [
    { name: 'Article', value: 1, icon: "article", recent: "Recent Article 1", newAddedThisWeek: 2, trend: "up" },
    { name: 'Tip', value: 2, icon: "lightbulb", recent: "Recent tips 1", newAddedThisWeek: 10, trend: "down" },
    { name: 'Term', value: 3, icon: "Crossword", recent: "Recent term 1", newAddedThisWeek: 1,trend: "down" },
    { name: 'Tag', value: 4, icon: "tag", recent: "Recent tag 1", newAddedThisWeek: 20, trend: "up" },    
  ]

  articles = [
    { id:1, title: 'HTML width/height Attribute vs CSS width/height Property', author: 'Author 1', date: '2021-01-01', views: 100, likes: 10, comments: 5 },
    { id:2, title: 'How to expand floated child divs height to its parents height in CSS ?', author: 'Author 2', date: '2021-01-02', views: 200, likes: 20, comments: 10 },
    { id:3, title: 'How to make grid items auto height using tailwind CSS ?', author: 'Author 3', date: '2021-01-03', views: 300, likes: 30, comments: 15 },
    { id:4, title: 'How to set the Width and Height in Tailwind CSS ?', author: 'Author 4', date: '2021-01-04', views: 400, likes: 40, comments: 20 },
    { id:5, title: 'How to Create Columns with the Same Height in Tailwind CSS ?', author: 'Author 5', date: '2021-01-05', views: 500, likes: 50, comments: 25 },
    { id:6, title: 'Tailwind CSS Max-Height', author: 'Author 6', date: '2021-01-06', views: 600, likes: 60, comments: 30 },
    { id:7, title: 'Tailwind CSS Min-Height', author: 'Author 7', date: '2021-01-07', views: 700, likes: 70, comments: 35 },
    { id:8, title: 'How to Increase Height and Width of Date and Time Fields in Tailwind CSS?', author: 'Author 8', date: '2021-01-08', views: 800, likes: 80, comments: 40 },
    { id:9, title: 'Article 9', author: 'Author 9', date: '2021-01-09', views: 900, likes: 90, comments: 45 },
    { id:10, title: 'Article 10', author: 'Author 10', date: '2021-01-10', views: 1000, likes: 100, comments: 50 }
  ]
}
