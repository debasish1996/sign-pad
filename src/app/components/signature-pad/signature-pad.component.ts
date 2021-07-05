import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import SignaturePad from 'signature_pad';
import { SignatureService } from './signature.service';

@Component({
  selector: 'ng-signature-pad',
  templateUrl: 'signature-pad.component.html',
  styleUrls: ['signature-pad.component.scss'],
})
export class SignaturePadComponent implements OnInit, AfterViewInit {
  private signaturePad: SignaturePad;
  @ViewChild('canvas', { read: ElementRef }) canvasRef: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(e) {
    this.signatureService.resizeCanvas();
  }

  // @Input() points: any[] = [];
  // @Output() pointsChange = new EventEmitter<any>();

  // @Input() editable = true;
  // @Input() emitOnDragEnd = false;

  @Input() penColor = 'black';
  // @Input() backgroundColor = 'transparent';

  // @Input() showDoneButton = true;
  // @Input() doneButtonText = 'Done';
  // @Input() doneButtonClass = 'btn btn-primary';
  // @Input() showClearButton = true;
  // @Input() clearButtonText = 'Clear';
  // @Input() clearButtonClass = 'btn btn-default';

  // @Input() format: 'blob' | 'base64' | 'json' = 'blob';



  // @Output() done = new EventEmitter();
  // @Output() cleared = new EventEmitter();

  // @Input() responsive = true;

  constructor(private signatureService: SignatureService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.signatureService.initPad(this.canvasRef.nativeElement);
    this.signatureService.resizeCanvas();
  }



  // applyPoints() {
  //   if (!this.points || !this.signaturePad) {
  //     return;
  //   }

  //   this.signaturePad.clear();

  //   const multiplier = this.canvasRef.nativeElement.offsetWidth / this.width;

  //   const points = JSON.parse(JSON.stringify(this.points));
  //   points.forEach((group) => {
  //     group.points.forEach((pt) => {
  //       pt.x = pt.x * multiplier;
  //       pt.y = pt.y * multiplier;
  //     });
  //   });
  //   this.signaturePad.fromData(points);
  // }

  // emitPoints() {
  //   const multiplier = this.canvasRef.nativeElement.offsetWidth / this.width;
  //   const points = JSON.parse(JSON.stringify(this.signaturePad.toData()));
  //   points.forEach((group) => {
  //     group.points.forEach((pt) => {
  //       pt.x = pt.x / multiplier;
  //       pt.y = pt.y / multiplier;
  //     });
  //   });
  //   this.pointsChange.emit(points);
  // }

  // emitPointsAndBlob() {
  //   this.emitPoints();
  //   this.emitBlob();
  // }

  // emitBlob() {
  //   switch (this.format) {
  //     case 'base64':
  //       this.done.emit(this.signaturePad.toDataURL());
  //       break;

  //     case 'json':
  //       this.done.emit(this.signaturePad.toData());
  //       break;

  //     default:
  //       this.canvasRef.nativeElement.toBlob((blob) => {
  //         this.done.emit(blob);
  //       });
  //       break;
  //   }
  // }
}
