import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
//import{ingredient}from'./ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient('Apples',23),
  new Ingredient('Tomato',10),
]
  constructor() { }

  ngOnInit() {
  }

}
