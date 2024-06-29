import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  MatchingValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    return (formGroup: FormGroup) => {
      const control = form.get("password");
      const matchingControl = form.get("confirmPassword");
      
      if(control && matchingControl && control.value != matchingControl.value) {
          return { passwordmatcherror: true };
      }
      return null;
    };
  }

  passwordValidator: ValidatorFn = ( control: AbstractControl ): ValidationErrors | null => {
    const password = control.value;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    const isValid = hasLower && hasUpper && hasNumber;
    if(!isValid){
      return {
        lower: !hasLower,
        upper: !hasUpper,
        number: !hasNumber
      }
    }
    return null;
  };


  form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8), this.passwordValidator]),
    confirmPassword: new FormControl<string>('', [Validators.required])
  }, [this.MatchingValidator]);

  constructor(private userService: UsersService){}

  submit(){
    if(this.form.valid){
      let user: User = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
      } as User;

      this.userService.postUser(user).subscribe(res => {
        console.log(res);
      });
    }else{
      console.log(this.form.errors);
    }
  }
}
