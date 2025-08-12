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

    //The method uses html2canvas, a library to capture an HTML element 
    //(in this case, the .certificate class element) and turn it into a canvas (a bitmap image).



    html2canvas(certificateElement).then(canvas => {
      // Convert the canvas to a data URL
      const imageUrl = canvas.toDataURL('image/png');

      // canvas.toDataURL('image/png') is a method provided by the HTMLCanvasElement interface that generates a base64-encoded Data URL representing the image drawn on the canvas.
      // A base64-encoded Data URL is a way of encoding binary data (such as an image or a file) into a text format that can be directly embedded within web pages, CSS, JavaScript, or
      



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

// navigateToComponent(route: string) method is used for navigation. It accepts a route (like /cultural or /academic) 
//and uses Angular's Router.navigate() method to navigate to the specified route.

// * The navigateToComponent method is invoked in the template when the user clicks a button  
navigateToComponent(route: string) {
  this.router.navigate([route]);
}

}
