import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _service:ContactsService) { }

  ngOnInit(): void {
  }

  AddRecord(fname,lname,num){
    this._service.AddRecord(fname,lname,num);
  }


}
