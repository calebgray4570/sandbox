import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/core';
import { SuccessComponent } from '../success/success.component';
import { ErrorComponent } from './../error/error.component';

type PaneType = 'left' |'middle' | 'right';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
    public loginForm: FormGroup;
    public modalOpened: boolean = false;
    public passwordPlaceholder = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    public login: boolean = true;
    public forgotPassword: boolean = false;
    public forgotSubmitted: boolean = false;

    public activeSlide: PaneType = 'left'

    constructor(
        private authService: AuthService,
        private snackMessage: MatSnackBar,
        private fb: FormBuilder,
        private router: Router,
        private dialogRef: MatDialogRef<LoginModalComponent>,
    ) { }

    ngOnInit() {
        this.loginForm = this.buildForm();
    }

    buildForm() {
        return this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    onLoginSubmit() {
        if (!this.loginForm.valid) return
        this.authService.login(this.loginForm.value)
            .subscribe(
                (res) => {},
                (err) => {
                    this.errorMessage();
                    // this.authService.clearAuth();
                    // this.forgotPassword = true;
                },
                () => {
                    this.dialogRef.close();
                    this.successMessage();
                    this.router.navigate([''])
                    // console.log('hit')
                },// Complete
            )
    }
    
    successMessage() {
        this.snackMessage.openFromComponent(SuccessComponent, {duration: 1500})
    }

    errorMessage() {
        this.snackMessage.openFromComponent(ErrorComponent, {duration: 1500})
    }

    registerAccount() {
        this.dialogRef.close();
        this.router.navigate(['/app/auth/register'])
    }

    togglePasswordReset(){
        !this.forgotPassword ? this.forgotPassword = true : this.forgotPassword = false;
        !this.login ? this.login = true : this.login = false;
    }

    passwordReset(email) {
        const emailReset = {"email": email}
        this.authService.startPasswordReset(emailReset)
            .subscribe(
                () => {},
                () => {},
                () => {
                    this.forgotPassword = false;
                    this.forgotSubmitted = true;
                }
            )
    }

    handleResetClose() {
        this.dialogRef.close();
    }
}
