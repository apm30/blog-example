import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  constructor() {}

  ngOnInit() {}
}
