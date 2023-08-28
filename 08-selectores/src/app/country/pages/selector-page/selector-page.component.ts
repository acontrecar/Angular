import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/contry.interfaces';
import { Observable, filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private contriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.contriesService.regions;
  }

  public onRegionChange(): void {
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => (this.borders = [])),
        switchMap((region) => this.contriesService.getCountriesByRegion(region))
      )
      .subscribe((countries) => {
        this.countriesByRegion = countries.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });
  }

  public onCountryChange(): void {
    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value: string) => value.length > 0),
        switchMap((alphaCode) =>
          this.contriesService.getCountryByAlphaCode(alphaCode)
        ),
        switchMap((country) =>
          this.contriesService.getCountryBorderByCode(country.borders)
        )
      )
      .subscribe((countries) => {
        this.borders = countries;
      });
  }
}
