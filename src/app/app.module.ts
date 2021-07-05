import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignaturePadComponent } from './components/signature-pad/signature-pad.component';
import { DrawingPadModalComponent } from './components/drawing-pad-modal/drawing-pad-modal.component'
import { SignatureService } from './components/signature-pad/signature.service';

@NgModule({
  declarations: [
    AppComponent,
    SignaturePadComponent,
    DrawingPadModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SignatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
