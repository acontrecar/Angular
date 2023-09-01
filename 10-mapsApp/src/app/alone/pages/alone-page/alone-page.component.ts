import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
  imports: [CommonModule, CounterAloneComponent],
})
export class AlonePageComponent {}
