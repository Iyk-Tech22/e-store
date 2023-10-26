import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title:string = "Product";
  myText:string = "Property Binding";
  selectedProduct:string = "";
  productCart:string[] = [];

  onBuy(product:string):void {
    let found:number = this.productCart.indexOf(product)
    if (found != -1)
    {
      return
    }
    this.productCart.push(product)
    alert(`${product} added to your cart`)
  }
}
