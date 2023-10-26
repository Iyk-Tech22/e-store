import { Component, Input, Output, 
        EventEmitter, ViewEncapsulation,
        ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  @Input() name:string = "";
  @Output() bought:EventEmitter<any> = new EventEmitter();
  title:string = "Product Details"

  buy(product:string): void {
    this.bought.emit(product)
  }

  get productName():string {
    console.log(`Get ${this.name}`)
    return this.name
  }

}
