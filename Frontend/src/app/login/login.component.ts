import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {User} from "../user";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  
  newuser:User = new User();
  username:string = "";
  email:string = "";
  pwd:string = "";
  role:string = "";
  loggedin:boolean = false;

  private toastr = inject(ToastrService);
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')){
      this.loggedin = true;
    }else{
      this.loggedin = false;
    
    }
  }

  signin(event:any){
    console.log("at signin");
    event.preventDefault();
    this.authService.login(this.email,this.pwd).subscribe({
      next:
        (data)=>{
        
          if (data.id != 0){
            console.log(data);
            this.newuser = new User(data.username,data.email,'',data.avatar,data.id,data.role)
            this.authService.setCurrentuser(this.newuser);
            this.router.navigate(['/home_group']);
          }else{
            this.toastr.error('User login', 'There is a problem with the credentials.');
            
          }
      
      error:
      console.log("There is a problem with the credentials");
      
    }
      
   
  })

}
}
