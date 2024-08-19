import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private route:Router, private http:HttpClient){}
  signup:FormGroup | any;
  signuser:any;
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'Lname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signupdata(signup:FormGroup){
    console.log(this.signup.vlaue);
    this.signuser = this.signup.value.fname 
    this.http.post<any>("http://localhost:3000/signup",this.signup.value).
    subscribe(res=>{
      alert('Successfully signed up');
      this.signup.reset();
      this.route.navigate(['/login']);
    },err=>{
      alert('Something went wrong');
    })
  }

}
