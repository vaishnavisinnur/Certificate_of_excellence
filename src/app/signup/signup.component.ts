import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private baseUrl = environment.apiUrl;

  constructor(private route: Router, private http: HttpClient) {}
  signup: FormGroup | any;
  signuser: any;
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'Lname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signupdata(signup: FormGroup) {
    console.log(this.signup.value);
    this.signuser = this.signup.value.fname
    
    // This now uses the correct URL for both local and live environments
    this.http.post<any>(`${this.baseUrl}/signup`, this.signup.value).
    subscribe(res => {
      alert('Successfully signed up');
      this.signup.reset();
      this.route.navigate(['/login']);
    }, err => {
      alert('Something went wrong');
    })
  }

}