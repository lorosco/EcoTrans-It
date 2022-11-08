import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  /**
   * Type de modèle pour la visualisation de donnée
   */
  GeoChart = ChartType.GeoChart;

  chartColumns = ['Country','value'];

  data = [
    ['France',75]
  ]

  constructor() {}

  ngOnInit(): void {}
}
