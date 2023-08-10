import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: ContriesService) {}

  public searchCountry(term: string): void {
    this.countriesService
      .searchRegion(term)
      .subscribe((contries) => (this.countries = contries));
  }
}
