import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class WindowService {

  private _height: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private _width: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private _scroll: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  public get Height(): Observable<number> { return this._height.asObservable() }
  public get Width(): Observable<number> { return this._width.asObservable() }
  public get Scroll(): Observable<number> { return this._scroll.asObservable() }

  public constructor() {
    this.updateHeight()
    this.updateWidth()

    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  }

  private updateHeight = () => {
    this._height.next(window.innerHeight)
  }

  private updateWidth = () => {
    this._width.next(window.innerWidth)
  }

  private onResize = () => {
    this.updateHeight()
    this.updateWidth()
  }

  private onScroll = () => {
    this._scroll.next(window.scrollY)
  }
}
