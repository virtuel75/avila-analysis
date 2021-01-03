import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  private _windowHeightSubscription: Subscription | null = null

  @ViewChild(HeaderComponent) header!: HeaderComponent
  @ViewChild(FooterComponent) footer!: FooterComponent
  @ViewChild('main') main!: ElementRef;

  constructor(
    private windowService: WindowService
  ) {}

  public ngAfterViewInit(): void {
    this._windowHeightSubscription = this.windowService.Height.subscribe(this.resizeMainView)
  }

  public ngOnDestroy(): void {
    if (!!this._windowHeightSubscription)
      this._windowHeightSubscription.unsubscribe()
  }

  private resizeMainView = (windowHeight: number) => {
    this.main.nativeElement.style.minHeight = (windowHeight - this.footer.Height - this.header.Height).toString() + 'px'
  }

}
