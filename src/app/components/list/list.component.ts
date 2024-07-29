import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    constructor(private auth : AuthService){
      auth.getAllUsers().subscribe({
        next : (data : any) => console.log(data)
      })
    }
}
