import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TermService } from './services/term.service';
import { Term } from './term';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class TermComponent implements OnInit {
  termFormGroup: any;
  termId: number = 0;
  term: Term = { id: 0, name: '', definition: '' };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private termService: TermService
  ) {}

  ngOnInit(): void {
    this.termFormGroup = this.fb.group({
      name: [''],
      definition: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.termId = +params.get('id')!;
      if (this.termId) {
        this.termService.getTerm(this.termId).subscribe(term => {
          this.term = term;
          this.termFormGroup.patchValue(term);
        });
      }
    });
  }

  onSubmit() {
    if (this.termId) {
      this.termService.updateTerm(this.termId, this.termFormGroup.value).subscribe(() => {
        this.router.navigate(['/terms']);
      });
    } else {
      this.termService.createTerm(this.termFormGroup.value).subscribe(() => {
        this.router.navigate(['/terms']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/terms']);
  }
}
