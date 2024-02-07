import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import{NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { OkComponent } from './ok/ok.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePdfViewerComponent,
    OkComponent,
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
