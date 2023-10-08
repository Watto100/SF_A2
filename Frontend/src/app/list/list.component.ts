import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
 
 private dataservice = inject(DataService);
 

  users:User[] = [];
  
  constructor(private router: Router){
    this.router = router;
  }
  btnClick=  () => {
    this.router.navigateByUrl('/home_group');
  };

  ngOnInit(): void {
    //get a list of all of the cars fro the server.
    this.dataservice.getAllUsers().subscribe({
      next: (data) =>{
       this.users =data; 
      }
    });
  }

  onSelect(user:User){
    this.dataservice.setcurrentuser(user);
  }
}
