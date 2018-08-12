import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; // referenciar os componentes do formulario do html
  constructor(
    private fb: FormBuilder, // criar a estrutura da pagina
    private snackBar: MatSnackBar, // para mostrar mensagem na tela
    private router: Router) { }

  ngOnInit() {
    this.validaForm(); // inicializando o validador
  }

validaForm(){
  this.form = this.fb.group({ //passa um json com as validações
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]] // no minimo 8 caracteres

  })
}

logar(){
  if(this.form.invalid){ // mensagem de erro se não passar pela validação
    this.snackBar.open("Dados inválidos", "Error", {duration: 5000}); 
    return;
  }
  alert(JSON.stringify(this.form.value)); // caso passe
}

}
