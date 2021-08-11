import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {Collection} from './models/collection.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements AfterViewInit {
  @Input() collections: Collection[];
  @ViewChild('collectionCanvas') collectionCanvasRef: ElementRef;
  increment = Math.PI * (3 - Math.sqrt(5));

  constructor(private readonly renderer: Renderer2) { }

  ngAfterViewInit(): void {
    let circle: ElementRef;
    const collectionsLength = this.collections.length;
    const offset = 2 / collectionsLength;
    const angle = (this.collectionCanvasRef) ? (-this.collectionCanvasRef.nativeElement.getBoundingClientRect().x / 4) * Math.PI / 180 : 0;

    // Building circle with image elements
    for (let index = 0; index < collectionsLength; index++) {
      const [x, y, scale] = this.getTransformValues(collectionsLength, offset, angle, index);

      // Creating circle with image
      circle = this.renderer.createElement('div');
      this.renderer.setStyle(circle, 'transform',  `translate3d(${125 + x * 100}px, ${125 + y * 100}px, ${scale}px)`);
      this.renderer.setAttribute(circle, 'data-index', this.collections[index].id.toString());

      // creating image / icon container
      if (this.collections[index].iconPath) {
        const img = this.renderer.createElement('img');
        this.renderer.setAttribute(img, 'class', 'spin-animation');
        this.renderer.setAttribute(img, 'src', this.collections[index].iconPath);
        this.renderer.appendChild(circle, img);
      } else {
        const icon = this.renderer.createElement('i');
        this.renderer.setAttribute(icon, 'class', `spin-animation ${this.collections[index].iconName}`);
        this.renderer.setStyle(icon, 'color', this.collections[index].color);
        this.renderer.appendChild(circle, icon);
      }

      // adding to the canvas
      this.renderer.appendChild(this.collectionCanvasRef.nativeElement, circle);
    }
  }

  getTransformValues(collectionsLength: number, offset: number, angle: number, index: number): number[] {
    const y = (index * offset - 1) + (offset / 2);
    const radius = Math.sqrt(1 - Math.pow(y, 2));
    const a = ((index + 1) % collectionsLength) * this.increment + angle;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    const scale = Math.round(z * 20000) / 100;

    return [x, y, scale];
  }
}
