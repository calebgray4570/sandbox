import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
  
import { AuthService } from 'src/app/core';
import { Subscription } from 'rxjs';
  
@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit, OnDestroy {

  condition: boolean;
  subscription$: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit() {
    this.subscription$ = this.authService.getCurrentUser.subscribe(
      (user) => {
        if (user && this.condition || !user && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}