import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/_model/login';
import { LoginService } from 'src/app/_services/login.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginRequest } from 'src/app/_model/loginRequest';
import Swal from 'sweetalert2';
import { ControlValueAccessor, FormControl, FormControlName, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass'],
  //Para validar los inputs
  providers: [{
 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DialogComponent),
    multi: true 

  }],
})
export class DialogComponent implements OnInit, ControlValueAccessor {

  login: LoginRequest = new LoginRequest();
  myform: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data: LoginRequest,
    private dialogRef: MatDialogRef<DialogComponent>,
    ) { }

    //Metodos de validaciones 
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.registerOnChange = fn;
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  dato: any;
  isClicked: boolean;

  ngOnInit(): void {
    this.login = this.data;
    this.login.correo = this.data.correo;
    this.login.password = this.data.password;
    this.makeForm();
  }

   makeForm(): void{
     this.myform = new FormGroup(
       {
          correof:new FormControl(this.data.correo, [Validators.required,Validators.email,Validators.minLength(15)]),
          passwordf: new FormControl(this.data.password,[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
          rolf: new FormControl(this.data.rol,[Validators.required])
         
       }
     )
     console.log(this.myform);
  }

  aceptar() {
    console.log(this.login);
    if (this.login != null && this.login.id! > 0) {
      console.log(this.login.correo);
      console.log(this.login.rol);
      this.loginService.actualizarRegistro(this.login).subscribe(data => {

        Swal.fire('Usuario actualizado', '', 'success');
        this.dialogRef.close(data);
      })

    } else {
      console.log('Crea Nuevo usuario');
      this.loginService.nuevoRegistro(this.login).subscribe(data => {

        Swal.fire('Usuario creado', '', 'success');
        this.dialogRef.close(true);
      })

    }

    this.isClicked = true;
  }



  cerrar() {
    this.dialogRef.close();
  }

  mensajesValid(){
    if(this.myform.value.correof.hasError('required')){
      return 'Debes ingresar un valor';
    }
    return this.myform.value.correof.hasError('email')? 'No es un correo valido' : '';
  }

}
