import html2canvas from 'html2canvas';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent {
  @ViewChild('certificate1') certificate1!: ElementRef;
  @ViewChild('certificate2') certificate2!: ElementRef;
  @ViewChild('certificate3') certificate3!: ElementRef;
  @ViewChild('certificate4') certificate4!: ElementRef;
  @ViewChild('certificate5') certificate5!: ElementRef;
  @ViewChild('certificate6') certificate6!: ElementRef;

  recipientName1: string = '';
  recipientName2: string = '';
  recipientName3: string = '';
  recipientName4: string = '';
  recipientName5: string = '';
  recipientName6: string = '';
  collegeName1: string = '';
  collegeName2: string = '';
  collegeName3: string = '';
  collegeName4: string = '';
  collegeName5: string = '';
  collegeName6: string = '';


  constructor(private renderer: Renderer2) {}

  private downloadCertificateForRecipient(recipientName: string, certificateElement: ElementRef) {
    html2canvas(certificateElement.nativeElement).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `certificate_${recipientName}.png`;

      this.renderer.appendChild(this.certificate1.nativeElement, link);
      link.click();
      this.renderer.removeChild(this.certificate1.nativeElement, link);
    });
  }

  downloadCertificate1() {
    this.downloadCertificateForRecipient(this.recipientName1, this.certificate1);
  }

  downloadCertificate2() {
    this.downloadCertificateForRecipient(this.recipientName2, this.certificate2);
  }

  downloadCertificate3() {
    this.downloadCertificateForRecipient(this.recipientName3, this.certificate3);
  }

  downloadCertificate4() {
    this.downloadCertificateForRecipient(this.recipientName4, this.certificate4);
  }

  downloadCertificate5() {
    this.downloadCertificateForRecipient(this.recipientName5, this.certificate5);
  }

  downloadCertificate6() {
    this.downloadCertificateForRecipient(this.recipientName6, this.certificate6);
  }

  nameTopPosition: number = 230;
  nameLeftPosition: number = 350;

}
