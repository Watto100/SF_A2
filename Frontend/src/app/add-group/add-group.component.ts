import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '../group';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {

  private dataservice = inject(DataService);

  name:string = "";
  channelString: string = "";
  memberString: string = "";
  newGroup: Group | undefined;

  memberArray: string[] = [];
  channelArray: string[] = [];



  constructor(){}

  ngOninit(){ 
  }

  addnewGroup(event: Event){
    this.memberArray = this.memberString.split(',');
    this.channelArray = this.channelString.split(',');
    event.preventDefault();
    this.newGroup = new Group(this.name,this.memberArray, this.channelArray);
    this.dataservice.addGroup(this.newGroup).subscribe((data) =>{
      console.log(data);
    })
    this.name = '';
    this.memberArray = [];
    this.channelArray = [];
  }

}
