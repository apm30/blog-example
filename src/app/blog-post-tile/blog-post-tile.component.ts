import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

  title: string;
  summary: string;
  constructor() { }

  ngOnInit() {
    this.title = "Blog title";
    this.summary = "Blog post summary";

  }

}
