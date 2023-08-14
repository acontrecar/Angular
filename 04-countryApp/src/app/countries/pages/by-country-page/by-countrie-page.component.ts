import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ContriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: ContriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  public searchCountry(term: string): void {
    this.countriesService
      .searchCountry(term)
      .subscribe((contries) => (this.countries = contries));
  }
}
