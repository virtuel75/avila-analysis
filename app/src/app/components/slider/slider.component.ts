import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() label!: string
  @Input() min!: number
  @Input() max!: number
  @Input() step!: number

  @Input() value: number | null = null
  @Output() valueChange = new EventEmitter<number | null>()

  public vertical: boolean = true

  constructor() { }

  ngOnInit(): void {
    if (!this.label)
      this.label = 'Label'

    if (this.value == undefined)
      this.value = 0

    if (this.min == undefined)
      this.min = 0

    if (this.max == undefined)
      this.max = 1
  }

  onValueChange = (val: MatSliderChange) => {
    this.value = val.value
    this.valueChange.emit(this.value)
  }

}
