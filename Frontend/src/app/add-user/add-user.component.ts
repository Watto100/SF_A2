import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  private dataservice = inject(DataService);

  id: number = 0;
  username:string = "";
  email:string = "";
  pwd: string = ""
  role: string = "";
  newUser: User | undefined;

  constructor(){}

  ngOninit(){ 
  }

  addnewUser(event: Event){
    event.preventDefault();
    this.newUser = new User(this.username,this.email, this.pwd, "", this.id, this.role);
    this.dataservice.addUser(this.newUser).subscribe((data) =>{
      console.log(data);
    })
    this.username = "";
    this.id = -1;
    this.email = "";
    this.pwd = "";
    this.role = "";
  }

}
