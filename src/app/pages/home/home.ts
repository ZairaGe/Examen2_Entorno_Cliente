import { Component, OnInit, inject } from '@angular/core';
import { SeriesService } from '../../services/series';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  series: any[] = [];
  seriesService = inject(SeriesService);

  ngOnInit() {
    this.seriesService.getAll().subscribe((response: any) => {
      this.series = response;
    });
  }
}