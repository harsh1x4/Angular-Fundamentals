import { Component, OnInit } from "@angular/core";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  contact: Contact = new Contact;

ngOnInit() {
  this.contact = {
    firstname: "sun",
    lastname: "ora",
    gender: "male",
    isToc: true,
    email: "sun@gmail.com"
  };
}

  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }
}



// ng generate class Contact

export class Contact {
    firstname?: string ;
    lastname?: string;
    gender?: string;
    isToc?: boolean;
    email?: string;
}