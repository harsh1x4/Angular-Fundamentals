import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'cart-app',
  templateUrl: './cart.component.html', 
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit { 
   cartItems: Item[] = [];

   constructor(private itemService: ItemService) { 
        console.log('ItemService injected');
   }

   getItemsForCart(): void {
        this.cartItems = this.itemService.getSelectedItems();
   }

   ngOnInit(): void {
        this.getItemsForCart();
   }
   
   removeItemFromCart(id:number): void {
        this.itemService.removeItem(id);
   }
}
    