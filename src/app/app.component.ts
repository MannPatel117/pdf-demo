import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf-view';
  src:string='https://devapi.technoforce.in/Dropbox/PDF_PO_Imported/TFS-PO-23-0154-R02.pdf';
}
