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

  // injecting login service here called dependency injection
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


   /*

   Steps for How JSON Server Works:

JSON Server takes a simple JSON file (like db.json) that contains data in a structured format and automatically 
creates a REST API server that you can interact with over HTTP(get,put,post).

   *) HTTP GET request to fetch users from the backend (localhost:3000/signup)
   *) get is a method to send a GET req to a specific URL
   *) Run JSON Server: If you have a db.json file and you're using a tool like json-server, you can start a
    mock backend by running a command like this:

                                "json-server --watch db.json" 

--watch db.json: This tells JSON Server to start a server and "watch" your db.json file for changes.

then json server automatically creates a REST API server that you can interact with over HTTP(get,put,post).

Whenever you modify the db.json file, the server will automatically reload the data.

URL: By default, JSON Server runs on http://localhost:3000. This means that your mock API will be available at that URL.

Mock API and Resources: JSON Server will automatically create RESTful routes based on the structure of your db.json. For example, 
if your db.json has a section like this:


{
  "users": [
    { "id": 1, "email": "user@example.com", "password": "password123" },
    { "id": 2, "email": "admin@example.com", "password": "admin123" }
  ]
}

JSON Server will expose an
- API(Application Programming Interface:It is a set of rules and protocols that allows different software applications to communicate with each other) at:

GET /users: To fetch all users.
GET /users/1: To fetch a specific user by ID (in this case, the user with ID 1).
POST /users: To create a new user.
PUT /users/1: To update the user with ID 1.
DELETE /users/1: To delete the user with ID 1.


*/
      this.http.get<any>('http://localhost:3000/signup') // THis link is making an HTTP request to http://localhost:3000/signup via the HttpClient module
      // As we can see when we run the watch db.json on the terminal the resources 

     // Processes the response (res) containing the array of user data.
      .subscribe
      (res=>{

   // Searching for a user with matching email and password
        const regUser = res.find((user:any)=>{
          return user.email === this.login.value.email && this.login.value.password
        });
        if(regUser){
    // If user is found, login is successful
          alert('You are successfully logged In');
          this.login.reset();// Reset form fields


 //  IMPORTANT : "Redirect to dashboard on successful login"

          this.route.navigate(['/home']);// Navigate to home page
        }else{
    // If no matching user is found
          alert('User not found');
          this.route.navigate(['login']);// Navigate back to login page
        }
      }, err=>{
    // If there is an error with the request
        alert('Something went wrong');
      })
  }

  // Login(){
  //   this.authservice.Login();
  // }

}
