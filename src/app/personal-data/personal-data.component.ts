import { Component, OnInit } from '@angular/core';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-personal-data',
  //templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
  template: `
  
    <div class="flex-container">
    <div id="mainContent">
        <p class="title">Colorlib Contact Form</p>
        <p>Contact us for custom quote</p>
        <input type="text" placeholder="Your name" [(ngModel)]="name" (keyup.enter)="onKeyUp()" />
        <input type="text" placeholder="Your Email Address" [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <input type="text" placeholder="Your Phone Number (optional)" [(ngModel)]="phoneNumber" (keyup.enter)="onKeyUp()" />
        <input type="text" placeholder="Your Web Site (optional)" [(ngModel)]="website" (keyup.enter)="onKeyUp()" />

        <textarea name="" id="inputtextarea" placeholder="Type your message here..." [(ngModel)]="message" (keyup.enter)="onKeyUp()"></textarea>
        <a href="#">
            <li class="button" (click)="onSubmitClicked()">Submit</li>
        </a>
    </div>
   
</div>
 <div class="flex-container">
      <div id="outputDiv">
      
      </div>
    </div>  
  `

})
export class PersonalDataComponent implements OnInit {
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  website: string = "";
  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {

  }

  displayFromLocalStorage() {
    if (typeof (Storage) !== "undefined") {
      document.querySelector("#outputDiv").innerHTML =
        "<p>Name: " + localStorage.getItem("name") + "</p>" +
        "<p>Email: " + localStorage.getItem("email") + "</p>" +
        "<p>Phone: " + localStorage.getItem("phoneNumber") + "</p>" +
        "<p>Website: " + localStorage.getItem("website") + "</p>" +
        "<p>Message: " + localStorage.getItem("message") + "</p>"
        ;
    } else {
      console.log("Your browser doesn't support web storage");
    }
  }

  setToLocalStorage() {
    // store values to local storage
    if (typeof (Storage) !== "undefined") {
      // Store
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("phoneNumber", this.phoneNumber);
      localStorage.setItem("website", this.website);
      localStorage.setItem("message", this.message);

    } else {
      console.log("Your browser doesn't support web storage");
    }
  }

  clearFromLocalStorage() {
    if (typeof (Storage) !== "undefined") {
      localStorage.clear();
    } else {
      console.log("Your browser doesn't support web storage");
    }
  }

  onSubmitClicked() {
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    console.log("Phone: " + this.phoneNumber);
    console.log("Website: " + this.website);
    console.log("Message: " + this.message);

    this.setToLocalStorage();         // Save to localStorage
    this.displayFromLocalStorage();   // Display from localStorage
    this.clearFromLocalStorage();     // Clear from localStorage

    // Reset form fields
    this.name = "";
    this.email = "";
    this.phoneNumber = "";
    this.website = "";
    this.message = "";
  }


}
