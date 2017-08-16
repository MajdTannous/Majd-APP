import { Component, OnInit } from '@angular/core';
import {Bill} from '../Bill'
import { MajdServiceService } from "../services/majd-service.service";

@Component({
  selector: 'app-majd-bill',
  templateUrl: './majd-bill.component.html',
  styleUrls: ['./bootstrap.css'],
  providers:[MajdServiceService]

})
export class MajdBillComponent implements OnInit {
  bills: Bill[] = []
  constructor(private dataSerive:MajdServiceService) {
this.bills=dataSerive.getBills();

   }

  ngOnInit() {
  }
  addNewItem(item: string , amount:number , price:number){
    this.bills.push(new Bill(item,amount,price));
  }
  removeItem(bill: Bill) {
    this.bills = this.bills.filter(  t => t !== bill);
  }
  updateamount(b: Bill,amount:number )
  {
    if(amount>=0)
      {
    if(amount==0)
      {
        this.removeItem(b);
      }
    b.setAmount(amount);
      }
  }
 gettotalprice() {
   let total = 0;
   for (var i = 0; i < this.bills.length; i++) {
        
            total += this.bills[i].getPrice();
         
        
    }
    return total;
 }
}
