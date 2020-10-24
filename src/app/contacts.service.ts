import { Injectable } from '@angular/core';
import { Contacts } from 'src/app/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  id:number = 0;
  allContacts : Contacts[] = [{id:++this.id,fname : "Saurav", lname:"Tiwari", num : 9833138095},
  {id:++this.id,fname : "Ajay", lname:"Upadhyaya", num : 9833138045},
  {id:++this.id,fname : "Yogesh", lname:"Narwal", num : 9833138495}]

  getAllContacts(){
    return this.allContacts;
  }

  delete(value: Contacts){
    debugger;

    let index = this.allContacts.indexOf(value);
    this.allContacts.splice(index, 1);
}


AddRecord(fname1,lname1,num1){
  this.allContacts.push({id:++this.id,fname:fname1,lname:lname1,num:num1});
  alert("New Contact Added Successfully");
  console.log("added")
}

getUserById(id1){
  for(var i in this.allContacts){
    if(this.allContacts[i].id == id1){
      // console.log(fname1+" "+lname1+" "+num1)
      console.log(this.allContacts[i])
      return this.allContacts[i];
  
    }
}
}

updateRecord(id1,fname1,lname1,num1){
  for(var i in this.allContacts){
    if(this.allContacts[i].id == id1){
      // console.log(fname1+" "+lname1+" "+num1)
      this.allContacts[i].fname = fname1;
      this.allContacts[i].lname = lname1;
      this.allContacts[i].num = num1;
      // console.log(this.allContacts);
    
      break;
    }
  }
  alert("Contact Edited Successfully");

}
}

