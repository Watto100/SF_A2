import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { User } from '../user';
import { Group } from '../group';


@Component({
  selector: 'app-list_group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListGroupComponent implements OnInit{
 
 private dataservice = inject(DataService);
 

  groups:Group[] = [];
  
  ngOnInit(): void {
    //get a list of all of the cars fro the server.
    this.dataservice.getAllGroups().subscribe({
      next: (data) =>{
       this.groups =data; 
      }
    });
  }

  onSelect(group:Group){

    sessionStorage.setItem('currentGroup',JSON.stringify(group));
    // this.dataservice.setcurrentgroup(group);
  }
}
