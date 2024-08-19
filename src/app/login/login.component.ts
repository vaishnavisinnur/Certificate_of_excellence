import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private http:HttpClient,private route:Router,private authservice:AuthService){}

  login:FormGroup | any;
  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/^[0-9 && '+']{13}$/)])
    })
  }

  logindata(login:FormGroup){
   
      this.http.get<any>('http://localhost:3000/signup')
      .subscribe(res=>{
        const regUser = res.find((user:any)=>{
          return user.email === this.login.value.email && this.login.value.password
        });
        if(regUser){
          alert('You are successfully logged In');
          this.login.reset();
          this.route.navigate(['/home']);
        }else{
          alert('User not found');
          this.route.navigate(['login']);
        }
      }, err=>{
        alert('Something went wrong');
      })
  }

  // Login(){
  //   this.authservice.Login();
  // }





}
