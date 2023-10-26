import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() name:string = "";
  @Output() bought:EventEmitter<any> = new EventEmitter();
  title:string = "Product Detail"

  buy(product:string): void {
    this.bought.emit(product)
  }

}
