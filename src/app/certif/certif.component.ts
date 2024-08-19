import { Component,ElementRef, Renderer2  } from '@angular/core';
import html2canvas from 'html2canvas';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css']
})
export class CertifComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  recipientName: string = ''; // Initialize with an empty string or a default value

  downloadCertificate() {
    const certificateElement = this.el.nativeElement.querySelector('.certificate');



    html2canvas(certificateElement).then(canvas => {
      // Convert the canvas to a data URL
      const imageUrl = canvas.toDataURL('image/png');



      // Create a link element with the data URL
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'certificate.png';



      // Simulate a click on the link to trigger the download
      this.renderer.appendChild(this.el.nativeElement, link);
      link.click();
      this.renderer.removeChild(this.el.nativeElement, link);
    });
  }


}
