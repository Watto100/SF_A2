import { Component ,OnInit,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  user:User = <User>{};

  private dataservice = inject(DataService);

  ngOnInit(): void {
      this.dataservice.currentuser$.subscribe({
        next: (data)=>{
         this.user = data;
       }
      })
      
  }
}
