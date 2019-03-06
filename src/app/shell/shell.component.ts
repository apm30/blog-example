import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  @ContentChild('appHeader') headerElem;
  constructor() {}

  ngOnInit() {
    this.headerElem.nativeElement.style.color = 'blue';
  }
}
