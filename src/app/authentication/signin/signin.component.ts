import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Login } from "../../_model/login";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "../../_services/login.service";
import { passwordValidator } from '../password-validation.directive';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  implements OnInit {
  public loginForm: FormGroup;

  roleando:any;
  alumno:any;
  submitted = false;
  loading = false;
  error = "";
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  public formulario = this.formBuilder.group({
  correo: ["", [Validators.required, Validators.email]],
   password: [null, { validators: [Validators.required, Validators.minLength(4),passwordValidator()] }],

  });

  login() {
    this.submitted = true;
    this.loading = true;
    this.error = "";
    console.log(this.formulario.value)
    this.loginService.login_(this.formulario.value).subscribe(resp => {

      console.log('Logeando')
      resp.list.forEach(({rol})=> {
        this.roleando = rol;
        console.log(this.roleando)
      })
      resp.list.forEach(({alumno}) =>{
        this.alumno = alumno;
      })
      
      if(this.roleando === 1){
        this.router.navigate(['/admin/dashboard/main']);
        console.log(this.roleando)
      }
      if(this.roleando === 2){
        this.router.navigate(['/profesor/dashboard']);
        console.log(this.roleando)
      }
      if(this.roleando === 3) {
       this.router.navigate(["/alumno/dashboard/",this.alumno],{relativeTo: this.route});
       console.log(this.roleando)
       console.log("id del alumno",this.alumno)
      } 

      console.log(this.loading)
    }
    ),
    
      (error) => {

        this.error = error;
        this.submitted = false;
        this.loading = false;
        console.log(this.loading)
      };

  }
  onSubmit() {

   }
  
  }
    
 
  
