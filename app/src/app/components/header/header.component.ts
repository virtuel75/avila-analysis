import { Component, ElementRef, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faGithub = faGithub

  public get Height(): number { return this._element.nativeElement.offsetHeight }

  constructor(
    public _element: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
