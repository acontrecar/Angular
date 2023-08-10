import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './contry-table.component.html',
  styles: [
    `
      img {
        width: 50px;
        border-radius: 10px;
      }
    `,
  ],
})
export class ContryTableComponent {
  @Input()
  public countries: Country[] = [];
}
