import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-section-modal',
    templateUrl: './section-modal.component.html',
    styleUrls: ['./section-modal.component.scss'],
  })

  export class SectionModalComponent implements OnInit {
    public selectedIndex: number;

    constructor(
        private dialogRef: MatDialogRef<SectionModalComponent>,
        @Inject(MAT_DIALOG_DATA) public sectionsList: any[]
    ) {}

    ngOnInit(){}

    handleSelect(index){
        this.selectedIndex = index;
    }

    handleSubmit() {
        this.dialogRef.close(this.selectedIndex);
    }

    handleCancel() {
        this.dialogRef.close(null)
    }


  }