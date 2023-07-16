
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'app-image-capture',
    templateUrl: './image-capture.component.html',
    styleUrls: ['./image-capture.component.css']
  })

export class ImageCaptureComponent implements OnInit {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';

  selectedFile: File | null = null;
  http: any;

  // encodedImage: string | undefined;
  // decodedImage: SafeResourceUrl | undefined;
  // constructor(private sanitizer: DomSanitizer) {}


  constructor(private sharedService : SharedService){};

 

    //  decodeImage(): void {
    //    if (this.encodedImage) {
    //      this.decodedImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.encodedImage);
    //    }
    //  }

  ngOnInit() {}

  public getSnapshot(): void {
        this.trigger.next(void 0);
      }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage.imageAsDataUrl;
    // console.info('got webcam image', this.sysImage);
    //create a service function which sends the image to database.
    // console.log(this.sysImage);
    const test = this.webcamImage.imageAsDataUrl
    this.sharedService.setImgData(test);
    
    // Store the captured image
    // this.storeImage(webcamImage);
  }

  // private storeImage(webcamImage: WebcamImage): void {
  //   const imageBlob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
  //   const imageName = 'captured_image.jpg'; // You can provide a desired name for the image
    
  //   const imagePath = ` C:/Users/abhishek.k/imageCapture/app/assets/images/${imageName}`;
  //   const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });

  //   // Save the image file
  //   // this.saveFile(imageFile, imagePath);
  // }

  // private dataURItoBlob(dataURI: string): Blob {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ab], { type: mimeString });
  // }

  // private saveFile(file: File, path: string): void {
  //   const a = document.createElement('a');
  //   a.href = URL.createObjectURL(file);
  //   a.download = path;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(a.href);
  // }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadImage(): void {
    // if (this.selectedFile) {
      // const formData: FormData = new FormData();
      // formData.append('image', this.selectedFile, this.selectedFile.name);
      // Replace 'your_upload_url' with the endpoint URL where you want to upload the image
      const uploadUrl = 'D:/OneDrive - Olam International/Visitor_Ledger/src/assets/';

      // this.http.post(uploadUrl, formData).subscribe(
        // (response: any) => {
          // Handle success response from the server
          console.log('Image uploaded successfully!');
        // },
        (error: any) => {
          // Handle error response from the server
          console.error('Error uploading image:', error);
        }
      // );
    // }
    }
  
}
