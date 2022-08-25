import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id!: any;
  editForm!: FormGroup;
  product!: any;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.product = this.getProduct(this.id);

      this.editForm = new FormGroup( {
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      });
      // const product = this.getProduct(this.id);
      // console.log(product)
      // this.editForm = new FormGroup({
      //   id: new FormControl(product?.id),
      //   name: new FormControl(product?.name),
      //   price: new FormControl(product?.price),
      //   description: new FormControl(product?.description),
    // });
    });
  }



  ngOnInit(): void {
  }

  getProduct(id: number){
    return this.productService.findById(id);
  }

  updateProduct(id: number){
    const product = this.editForm.value;
    this.productService.updateProduct(id, product);
    this.router.navigate(["/"]);
  }

  }


