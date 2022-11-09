import { Component, OnInit } from '@angular/core';

declare var tableau: any

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  viz: any;

  availableViews: string[] = [
    'Nationale',
    'Régionale',
    'Départementale',
    'Communale',
    'Individuelle'
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadNewViz('https://public.tableau.com/shared/443JB3FQJ?:display_count=n&:origin=viz_share_link');
    }

  loadNewViz(url: string) {
    let placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    let options = {        
      hideTabs: true,        
      width: "100%",        
      height: "800px",        
      onFirstInteractive: function() {              
        // The viz is now ready and can be safely used.              
        console.log("Run this code when the viz has finishedloading.");        
      }};
      // Creating a viz object and embed it in the container div.
      this.viz = new tableau.Viz(placeholderDiv, url, options);
  
  }
}
