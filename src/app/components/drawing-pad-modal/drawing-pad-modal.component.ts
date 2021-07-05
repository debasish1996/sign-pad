import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignatureService } from '../signature-pad/signature.service';

@Component({
  selector: 'app-drawing-pad-modal',
  templateUrl: './drawing-pad-modal.component.html',
  styleUrls: ['./drawing-pad-modal.component.scss']
})
export class DrawingPadModalComponent implements OnInit {

  @Output() onUse: EventEmitter<string> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();


  colors = [ 'black', 'blue', 'red', 'green' ];
  active = this.colors[0];

  constructor(private signaturePad: SignatureService) { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.signaturePad.changePenColor(color);
    this.active = color;
  }

  clearPad() {
    this.signaturePad.clearPad();
  }

  onClickUse() {
    const ImageB64 = this.signaturePad.export();
    this.onUse.emit(ImageB64);
    this.onClose.emit();
  }



}
