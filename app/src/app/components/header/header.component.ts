import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get Height(): number { return this._element.nativeElement.offsetHeight }

  constructor(
    public _element: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
