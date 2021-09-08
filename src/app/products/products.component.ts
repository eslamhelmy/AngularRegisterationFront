import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  title:string = 'List of Products';
  isHidden:boolean=true;
  isDisabled:boolean = true;
  numberOfProducts:number = 5;
  products: Product[]=[
    {
      id: 1,
      name:'laptop',
      price: 20000,
      image: 'laptop.png'
     },
    {
      id: 2,
      name:'camera',
      price: 10000,
      image: 'camera.jpeg'
    },
    {
      id: 3,
      name:'tv',
      price: 50000,
      image: 'tv.jpg'
    }
  ]
  constructor() { }

  getTitle(){
    return this.title;
  }

}
