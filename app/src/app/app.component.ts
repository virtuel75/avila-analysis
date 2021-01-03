import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PredictorService } from './services/predictor.service';
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

  public step: number = 0.1

  public f1_val: number | null = 0
  public f1_min: number = -3.4
  public f1_max: number = 11.8
  public f1_label: string = 'intercolumnar distance'

  public f2_val: number | null = 0
  public f2_min: number = -2.4
  public f2_max: number = 386
  public f2_label: string = 'upper margin'

  public f3_val: number | null = 0
  public f3_min: number = -3.2
  public f3_max: number = 50
  public f3_label: string = 'lower margin'

  public f5_val: number | null = 0
  public f5_min: number = -4.9
  public f5_max: number = 1
  public f5_label: string = 'row number'

  public f7_val: number | null = 0
  public f7_min: number = -11.9
  public f7_max: number = 83
  public f7_label: string = 'interlinear spacing'

  public prediction: string = 'unknow'
  public score: number = 0.0

  constructor(
    private _windowService: WindowService,
    private _predictorService: PredictorService
  ) { }

  public ngAfterViewInit(): void {
    this._windowHeightSubscription = this._windowService.Height.subscribe(this.resizeMainView)
  }

  public ngOnDestroy(): void {
    if (!!this._windowHeightSubscription)
      this._windowHeightSubscription.unsubscribe()
  }

  private resizeMainView = (windowHeight: number) => {
    this.main.nativeElement.style.minHeight = (windowHeight - this.footer.Height - this.header.Height).toString() + 'px'
  }

  predict = () => {
    if (this.f1_val != null
      && this.f2_val != null
      && this.f3_val != null
      && this.f5_val != null
      && this.f7_val != null) {

      const data: number[] = [this.f1_val, this.f2_val, this.f3_val, this.f5_val, this.f7_val]
      console.log(data)

      this._predictorService.predict(data)
        .toPromise()
        .then((result) => {
          if (result) {
            this.prediction = result.prediction
            this.score = result.accuracy
          }
        })
    }
  }

}
