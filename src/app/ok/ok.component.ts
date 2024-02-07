import { Component } from '@angular/core';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OkComponent {

  Base64: any;

  fileurlk: any;

  onInputChange(event: any){

    let targetEvent = event.target;

    let file:File = targetEvent.files[0];

    let fileReader: FileReader = new FileReader();

    fileReader.onload = (e) =>{
      this.Base64 = fileReader.result
    }
    fileReader.readAsDataURL(file)

  }

  descargarFile() {
    this.Base64 = this.Base64.replace('data:application/pdf;base64,', '');
    const byteArray = new Uint8Array(atob(this.Base64)
      .split('')
      .map((char) => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    let fileName = 'descarga pdf';
    let link = document.createElement('a');
    link.download = fileName;
    link.target = '_blank'
    link.href = fileURL
    this.fileurlk = fileURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

}
