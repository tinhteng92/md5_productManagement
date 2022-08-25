import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  deleteForm!: FormGroup;
  id!: number;
  product!: any;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.deleteForm = new FormGroup({
        id: new FormControl(product?.id),
        name: new FormControl(product?.name),
        price: new FormControl(product?.price),
        description: new FormControl(product?.description),
      });
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    return this.productService.findById(id)
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }
}
