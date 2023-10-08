import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListGroupComponent } from '../list_group/list.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home_group',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListGroupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeGroupComponent {
 private router = inject(Router)


}
