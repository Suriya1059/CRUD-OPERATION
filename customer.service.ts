import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl='http://localhost:3000/Users';
  constructor(private http:HttpClient) { }
  LoadCustomer() {
    return this.http.get(this.apiurl);
  }
  SaveCustomer(customerdata:any) {
    return this.http.post(this.apiurl,customerdata);
  }
  LoadCustomerbycode(id:any) {
    return this.http.get(this.apiurl+'/'+id);
  }
  RemoveCustomer(id:any) {
    return this.http.delete(this.apiurl+'/'+id);
  }
}
