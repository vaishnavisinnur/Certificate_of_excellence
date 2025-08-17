import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private route: Router) {}

  login: FormGroup | any;
  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/^[0-9 && '+']{13}$/)])
    })
  }

  logindata(login: FormGroup) {
    // This now uses the correct URL for both local and live environments
    this.http.get<any>(`${this.baseUrl}/signup`)
      .subscribe
      (res => {
        const regUser = res.find((user: any) => {
          return user.email === this.login.value.email && user.password === this.login.value.password
        });
        if (regUser) {
          alert('You are successfully logged In');
          this.login.reset();
          this.route.navigate(['/home']);
        } else {
          alert('User not found');
          this.route.navigate(['login']);
        }
      }, err => {
        alert('Something went wrong');
      })
  }
}