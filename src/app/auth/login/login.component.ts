import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Obtener los datos del localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

      // Buscar un usuario que coincida con el correo y la contraseña
      const user = storedUsers.find((user: any) => user.email === email && user.password === password);

      if (user) {
        // Si el usuario es encontrado, guardar su email en el localStorage
        localStorage.setItem('loggedInUserEmail', user.email);

        // Redirigir al componente principal de la app
        console.log('Login exitoso, redirigiendo a la página principal');
        this.router.navigate(['/home']); // Redirigir a la ruta '/home'
      } else {
        // Si las credenciales no coinciden, mostrar un mensaje de error
        this.errorMessage = 'Correo o contraseña incorrectos. Inténtelo nuevamente.';
      }
    }
  }
}
