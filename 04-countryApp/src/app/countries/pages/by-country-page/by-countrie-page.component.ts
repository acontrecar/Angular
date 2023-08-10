import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: ContriesService) {}

  public searchCountry(term: string): void {
    this.countriesService
      .searchCountry(term)
      .subscribe((contries) => (this.countries = contries));
  }
}
