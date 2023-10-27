import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:CustomerService){}
}
