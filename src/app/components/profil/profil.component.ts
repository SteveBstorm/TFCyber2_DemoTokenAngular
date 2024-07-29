import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  constructor(private auth : AuthService){
    auth.getProfile().subscribe({
      next : (data : any) => console.log(data)
    })
  }
}
