import html2canvas from 'html2canvas';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent {
  // accesing template from the HTML code of this page
  // line allows you to access a specific certificate element in the DOM.
  @ViewChild('certificate1') certificate1!: ElementRef;
  @ViewChild('certificate2') certificate2!: ElementRef;
  @ViewChild('certificate3') certificate3!: ElementRef;
  @ViewChild('certificate4') certificate4!: ElementRef;
  @ViewChild('certificate5') certificate5!: ElementRef;
  @ViewChild('certificate6') certificate6!: ElementRef;
  @ViewChild('certificate7') certificate7!: ElementRef;
  @ViewChild('certificate8') certificate8!: ElementRef;
  @ViewChild('certificate9') certificate9!: ElementRef;
  @ViewChild('certificate10') certificate10!: ElementRef;
  @ViewChild('certificate11') certificate11!: ElementRef;
  @ViewChild('certificate12') certificate12!: ElementRef;
  @ViewChild('certificate13') certificate13!: ElementRef;
  @ViewChild('certificate14') certificate14!: ElementRef;
  @ViewChild('certificate15') certificate15!: ElementRef;
  @ViewChild('certificate16') certificate16!: ElementRef;


  recipientName1: string = '';
  recipientName2: string = '';
  recipientName3: string = '';
  recipientName4: string = '';
  recipientName5: string = '';
  recipientName6: string = '';
  recipientName7: string = '';
  recipientName8: string = '';
  recipientName9: string = '';
  recipientName10: string = '';
  recipientName11: string = '';
  recipientName12: string = '';
  recipientName13: string = '';
  recipientName14: string = '';
  recipientName15: string = '';
  recipientName16: string = '';
  collegeName1: string = '';
  collegeName2: string = '';
  collegeName3: string = '';
  collegeName4: string = '';
  collegeName5: string = '';
  collegeName6: string = '';
  collegeName7: string = '';
  collegeName8: string = '';
  collegeName9: string = '';
  collegeName10: string = '';
  collegeName11: string = '';
  collegeName12: string = '';
  collegeName13: string = '';
  collegeName14: string = '';
  collegeName15: string = '';
  collegeName16: string = '';

  rank16:string = '';


  constructor(private renderer: Renderer2) {}

  //downloadCertificateForRecipient is a helper function that captures a certificate element as an image and initiates the download.
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
  downloadCertificate7() {
    this.downloadCertificateForRecipient(this.recipientName7, this.certificate7);
  }
  downloadCertificate8() {
    this.downloadCertificateForRecipient(this.recipientName8, this.certificate8);
  }
  downloadCertificate9() {
    this.downloadCertificateForRecipient(this.recipientName9, this.certificate9);
  }
  downloadCertificate10() {
    this.downloadCertificateForRecipient(this.recipientName10, this.certificate10);
  }
  downloadCertificate11() {
    this.downloadCertificateForRecipient(this.recipientName11, this.certificate11);
  }
  downloadCertificate12() {
    this.downloadCertificateForRecipient(this.recipientName12, this.certificate13);
  }
  downloadCertificate13() {
    this.downloadCertificateForRecipient(this.recipientName13, this.certificate14);
  }
  downloadCertificate14() {
    this.downloadCertificateForRecipient(this.recipientName14, this.certificate14);
  }
  downloadCertificate15() {
    this.downloadCertificateForRecipient(this.recipientName15, this.certificate15);
  }
  downloadCertificate16() {
    this.downloadCertificateForRecipient(this.recipientName15, this.certificate15);
  }

  nameTopPosition: number = 230;
  nameLeftPosition: number = 350;

  // nameTopPosition: number = 190; 
  // nameLeftPosition: number = 350;
}
