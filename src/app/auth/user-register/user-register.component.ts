import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registerUserForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  //metodo para manejar el formgroup
  ngOnInit(): void {
    this.registerUserForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    })
  }

  //almacenamiento de datos en localstorage
  onSubmit():void{
    if( this.registerUserForm.valid){
      const userData = this.registerUserForm.value;

      //almacenamiento en localstorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(userData);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Usuario registrado exitosamente');

      //blanqueo de formulario luego del envio
      this.registerUserForm.reset();
    }else{
      alert('Por favor, completa todos los campos requeridos')
    }
  }

}
