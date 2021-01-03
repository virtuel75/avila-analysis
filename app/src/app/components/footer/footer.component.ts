import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public get Height(): number { return this._element.nativeElement.offsetHeight }

  constructor(
    public _element: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
