import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = 'Usuario';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

    const user = storedUsers.find((user: any) => user.email === loggedInUserEmail);
    if (user) {
      this.userName = user.name;
    }
  }

  logout(): void {
    // Eliminar el email del usuario logueado del localStorage
    localStorage.removeItem('loggedInUserEmail');
    // Redirigir al login
    this.router.navigate(['/login']);
  }
}
