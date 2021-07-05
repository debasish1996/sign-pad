import { Injectable } from '@angular/core';
import SignaturePad from 'signature_pad';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  private signaturePad: SignaturePad;
  private canvasRef: HTMLCanvasElement;

  constructor() { }

  initPad(canvas: HTMLCanvasElement) {
    this.canvasRef = canvas;
    this.signaturePad = new SignaturePad(canvas);
    this.signaturePad.on();
    // if (this.editable) {

    // } else {
    //   this.signaturePad.off();
    // }

    // this.signaturePad.onEnd = () => {
    //   this.emitPoints();
    //   if (this.emitOnDragEnd) {
    //     this.emitBlob();
    //   }
    // };

    // this.applyPoints();
    // if (this.emitOnDragEnd) {
    //   this.emitBlob();
    // }
  }

  changePenColor(color: string) {
    console.log(color);
    if(!this.signaturePad) return;
     this.signaturePad.penColor = color;
  }

  resizeCanvas() {
    const canvas = this.canvasRef;
    if (!canvas) return;
    const pad = canvas.closest('.signature-pad') as HTMLElement;
    if (!pad) return;
    const w = pad.offsetWidth;
    const h = pad.offsetHeight;
    canvas.setAttribute('width', `${w}`);
    canvas.setAttribute('height', `${h}`);
    // this.applyPoints();
  }

  clearPad() {
    this.signaturePad.clear();
    // this.cleared.emit();
    // this.emitPoints();
    // if (this.emitOnDragEnd) {
    //   this.emitBlob();
    // }
  }

  export() {
    return this.signaturePad.toDataURL();
  }
}
