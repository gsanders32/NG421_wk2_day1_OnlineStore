import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  shoppingCart: Array<IProduct>;

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.shoppingCart = this.productService.getShoppingCart();
  }

}
