import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/shared';
import { first, takeUntil } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentUser: any;
  public ngUnsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getCurrentUser();
  }


  login() {
    let dialogRef = this.dialog.open(LoginModalComponent, {
      height: '550px',
      width: '1100px',
      panelClass: 'custom-dialog-container',
    })

    dialogRef.afterClosed().pipe(first()).subscribe(
      res => {
        if (res) {
          this.getCurrentUser()
        } 
      }
    )
  }

  logout() {
    this.authService.logout().subscribe(
      // res => this.router.navigate(['/home'])
    )
  }


  private getCurrentUser() {
    /* cgray: gets current user to display user's name in header when logged in - let me know if there's a better way, possibly throught the authDirective? */
    this.authService.getCurrentUser
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(
        res => { 
          this.currentUser = res
        },
        err => console.info(err)
      )
  }
}
