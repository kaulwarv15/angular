import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contacts } from '../Contacts';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term: string;
  allContacts: Contacts[];
  order: string = 'fname';
  reverse: boolean = false;
  sortedCollection: any[];


  constructor(private _service: ContactsService, private router: Router, private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.allContacts, '');
    console.log(this.sortedCollection) 

  }

  ngOnInit(): void {
    this.allContacts = this._service.getAllContacts();
    console.log(this.allContacts)
  }

  deleteDetails(value:Contacts){

    this._service.delete(value);
  }

  AddUser(){
    this.router.navigate(['adduser']);
  }
  editDetails(id){
    this.router.navigate(['edituser',id]);

  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
