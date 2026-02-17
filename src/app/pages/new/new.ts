import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class NewComponent {
  seriesService = inject(SeriesService);
  router = inject(Router);

  seriesForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  onSubmit() {
    if (this.seriesForm.valid) {
      this.seriesService.create(this.seriesForm.value).subscribe(res => {
        alert('Serie creada. ID: ' + res.id);
        this.router.navigate(['/home']);
      });
    }
  }
}