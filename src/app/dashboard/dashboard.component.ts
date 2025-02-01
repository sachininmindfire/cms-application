// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatListModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats = [
    {
      name: "Published Content",
      value: "24",
      icon: "description",
      change: "+4 this week",
      trend: "up"
    },
    {
      name: "Scheduled Posts",
      value: "8",
      icon: "schedule",
      change: "Next: Tomorrow at 9 AM",
      trend: "up"
    },
    {
      name: "Active Users",
      value: "1,234",
      icon: "group",
      change: "+12% from last month",
      trend: "up"
    },
    {
      name: "Content Views",
      value: "45.2K",
      icon: "visibility",
      change: "-5% from last week",
      trend: "down"
    }
  ];

  contentViews = [
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 150 },
    { name: 'Wed', value: 180 },
    { name: 'Thu', value: 140 },
    { name: 'Fri', value: 200 },
    { name: 'Sat', value: 160 },
    { name: 'Sun', value: 130 }
  ];

  recentActivities = [
    {
      action: "New article published",
      title: "Getting Started with Content Management",
      time: "2 hours ago",
      author: "John Doe",
      status: "success"
    },
    {
      action: "Content scheduled",
      title: "Top 10 CMS Best Practices",
      time: "5 hours ago",
      author: "Jane Smith",
      status: "info"
    },
    {
      action: "Content draft saved",
      title: "Understanding Content Strategy",
      time: "Yesterday at 4:30 PM",
      author: "Mike Johnson",
      status: "warning"
    }
  ];
  

  ngOnInit(): void { }

}
