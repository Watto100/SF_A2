import { Component,inject,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './user';


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

 
ngOnInit(){
  let obj; 
  if (this.str != null){ 
    obj = JSON.parse(this.str);
    this.str1 = obj.role;
  }
}
  logout(event:any){
    
    this.authServices.logout(event);
    
    
    
    }
}
