import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit,OnInit {
  ngOnInit(): void {
    
  }


  title = 'Angu.pro';
  sideBarOpen= true;

    sideBarToggler(){

      this.sideBarOpen = !this.sideBarOpen;
    }



  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  nameInput!: HTMLInputElement;
  downloadBtn!: HTMLAnchorElement;
  image!: HTMLImageElement;

  ngAfterViewInit() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.downloadBtn = document.getElementById('download-btn') as HTMLAnchorElement;

    this.image = new Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = 'certificate.jpg';
    this.image.onload = () => {
      this.drawImage();
    };

    this.nameInput.addEventListener('input', () => {
      this.drawImage();
    });

    this.downloadBtn.addEventListener('click', () => {
      this.downloadBtn.href = this.canvas.toDataURL('image/jpg');
      this.downloadBtn.download = 'Certificate - ' + this.nameInput.value;
    });
  }

  drawImage() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = '40px monotype corsiva';
    this.ctx.fillStyle = '#29e';
    this.ctx.fillText(this.nameInput.value, 40, 180);
  }
}
