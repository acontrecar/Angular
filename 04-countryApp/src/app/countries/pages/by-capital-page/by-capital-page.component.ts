import { Component } from '@angular/core';
import { ContriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: ContriesService) {}

  public searchByCapital(term: string): void {
    this.countriesService
      .searchCapital(term)
      .subscribe((contries) => (this.countries = contries));
  }
}
