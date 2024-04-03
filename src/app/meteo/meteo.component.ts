import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

interface TemperatureRecord {
  city: string;
  year: number;
  avgTemperature: number;
}

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {
  title: string = 'Météo';

  temperatureData: Array<TemperatureRecord> = [
    {"city": "Paris", "year": 2020, "avgTemperature": 17.7},
    {"city": "Paris", "year": 2021, "avgTemperature": 18.1},
    {"city": "Paris", "year": 2022, "avgTemperature": 16.6},
    {"city": "Lyon", "year": 2020, "avgTemperature": 15.1},
    {"city": "Lyon", "year": 2021, "avgTemperature": 18.6},
    {"city": "Lyon", "year": 2022, "avgTemperature": 14.7},
    {"city": "Marseille", "year": 2020, "avgTemperature": 13.5},
    {"city": "Marseille", "year": 2021, "avgTemperature": 17.0},
    {"city": "Marseille", "year": 2022, "avgTemperature": 11.4},
    {"city": "Toulouse", "year": 2020, "avgTemperature": 13.6},
    {"city": "Toulouse", "year": 2021, "avgTemperature": 15.7},
    {"city": "Toulouse", "year": 2022, "avgTemperature": 17.5},
    {"city": "Nice", "year": 2020, "avgTemperature": 11.5},
    {"city": "Nice", "year": 2021, "avgTemperature": 19.4},
    {"city": "Nice", "year": 2022, "avgTemperature": 11.8}
  ];

  getCityWithHighestAvgTemperature(): string {
    let maxAvgTemperature = -Infinity;
    let cityWithMaxAvgTemperature = '';

    for (const record of this.temperatureData) {
      if (record.year >= new Date().getFullYear() - 2 && record.avgTemperature > maxAvgTemperature) {
        maxAvgTemperature = record.avgTemperature;
        cityWithMaxAvgTemperature = record.city;
      }
    }

    return cityWithMaxAvgTemperature;
  }
}

