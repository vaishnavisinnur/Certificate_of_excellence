// import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef,private router: Router) {}

  
  sideBarOpen= true;

  sideBarToggler(){

    this.sideBarOpen = !this.sideBarOpen;
  }

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
  nameTopPosition: number = 260; // Adjust the top position as per your requirement
nameLeftPosition: number = 350; // Adjust the left position as per your requirement

certificateMappings = {
  'Cultural': '/cultural',
  'Academic': '/academic',
  'Sports': '/sports',
  'Appreciation': '/appreciation',
  'Participation': '/participation'
};

navigateToComponent(route: string) {
  this.router.navigate([route]);
}

}
