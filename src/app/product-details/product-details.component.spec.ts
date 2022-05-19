import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

import { ProductDetailsComponent } from './product-details.component';

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  
  constructor(private route: ActivatedRoute) { }
}

ngOnInit(){
  const routeParams  this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  this.product = products.find( product => product.id == productIdFromRoute );

}

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

