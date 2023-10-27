import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private service:CustomerService){}
}
