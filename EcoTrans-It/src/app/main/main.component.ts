import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

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

  constructor(
    private contactMessageDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadNewViz('https://public.tableau.com/views/ProductionElec/Tableaudebord1?:language=fr-FR&publish=yes&:display_count=n&:origin=viz_share_link');
    }

    /**
     *
     * @param url url correspondant à l'accès à la visualisation partagé sur Tableau Public
     */
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

  /**
   *
   * @param manager gestionnaire de la portion de réseaux où la perte
   */
  openContactDialog(manager: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      message: {
        to: '',
        subject: '',
        message: false,
      },
      manager: manager
    };
    const dialogRef = this.contactMessageDialog.open(
      ContactDialogComponent,
      dialogConfig
    );
  }
}
