import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Progress} from './models/progress-circle.model';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements AfterViewInit {
  @Input() progress: Progress;
  @ViewChild('percent') percentElementRef: ElementRef;
  @ViewChild('circle') circleElementRef: ElementRef;
  maxValue: number;
  maxDashOffsetValue = 282;
  progressTimeoutValue = 80;

  ngAfterViewInit(): void {
    this.maxValue = this.progress.percent;
    let counter = 0;
    let dashOffsetValue = 282;
    setInterval(() => {
      if (counter === this.maxValue) {
        clearInterval();
      } else {
        counter += 1;
        dashOffsetValue = this.maxDashOffsetValue - (this.maxDashOffsetValue * counter) / 100;
        this.percentElementRef.nativeElement.innerHTML = `${counter}<span style="font-size: 16px">%</span>`;
        this.circleElementRef.nativeElement.style.cssText = `stroke-dashoffset:${dashOffsetValue};`;
      }
    }, this.progressTimeoutValue);
  }
}
