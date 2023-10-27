import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  messageclass = ''
  message = ''
  customerid: any;
  editdata: any;
  constructor(private service: CustomerService, private route: ActivatedRoute) {
    this.customerid = this.route.snapshot.paramMap.get('id');
    console.log(this.customerid);
    if(this.customerid!=null){
      this.UpdateCustomer(this.customerid);
    }
  }
  ngOnInit(): void {
  }
  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    phone: new FormControl("", Validators.required),
  });
  SaveCustomer() {
    if (this.register.valid) {
      console.log(this.register.value);
      this.service.SaveCustomer(this.register.value).subscribe(result => {
        if (result != null) {
          console.log(result);
          this.message = ("Customer data Saved Successfully!");
          this.messageclass = "Success";
          this.clearCustomer();
        }
      });
    } else {
      this.message = ("Please Enter valid data");
      this.messageclass = "Error";
    }
  }
  clearCustomer() {
    this.register = new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
    });
  }
  UpdateCustomer(id:any){
    this.service.LoadCustomerbycode(id).subscribe(data=>{
      this.editdata=data;
    });
    this.register = new FormGroup({
      id: new FormControl({value:this.editdata.id,disabled:true}),
      name: new FormControl(this.editdata.name),
      email: new FormControl(this.editdata.email),
      phone: new FormControl(this.editdata.phone),
    });
  }
 get name(){
  return this.register.get("name");
 }
 get email(){
  return this.register.get("email");
 }
 get phone(){
  return this.register.get("phone");
 }
}
