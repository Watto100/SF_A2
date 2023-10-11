import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './user';
import { Group } from './group';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  private authServices = inject(AuthService);
  // let currentUser:User; 
  public str = sessionStorage.getItem("currentUser");
  public obj: any;
  public str1: any | undefined;
  public str2: any | undefined;
  groups:Group[] = [];
  private dataservice = inject(DataService);

  constructor(private router: Router){
    this.router = router;
  }
 
ngOnInit(){
  let obj; 
  if (this.str != null){ 
    obj = JSON.parse(this.str);
    this.str1 = obj.role;
    this.str2 = obj.username;
  }
  this.dataservice.getAllGroups().subscribe({
    next: (data) =>{
     this.groups =data; 
    }});
}
  logout(event:any){
    
    this.authServices.logout(event);
    
    
    
    }
}
