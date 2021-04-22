import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from "src/app/services/firestore.service";
import { Hse } from 'src/app/shared/hse.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import pdfMake from 'src/pdfmake/build/pdfmake';
import pdfFonts from 'src/pdfmake/build/vfs_fonts';
import { Platform } from '@ionic/angular';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class ReportsPage implements OnInit {

  public reportList: Observable<Hse[]>;
  hse = {} as Hse;
  filterData = [];
  selectedfilterData = [];   
  report = {} as Hse;

  customReportTypeOptions: any = {  
    header: 'Choose Report to download',  
    subHeader: 'Select specific report'  
  };  

  customSpecificTypeOptions: any = {  
    header: 'Choose Specific Report',  
    subHeader: 'Select specific report'  
  };  

  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  selectedValue = "";
  logoData = null;
  base64Image: string;
  photoPreview: string;
  pdfObj: any;

  async getData(value: any){
    this.onButtonClick();
    this.filterData = [];
    this.reportList.subscribe(data => {
        data.forEach(res => {
          this.filterData.push(res);
        })
      })
  }

  async fetchReport(value: any){
    if(value == 'value1'){
      
    }
  }

  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
  
  constructor(private firestoreService: FirestoreService,
    private plt: Platform,
    private http: HttpClient,
    private fileOpener: FileOpener,
    private file: File) {}

  ngOnInit() {
    this.reportList = this.firestoreService.getHSEReports();
  }

  setReport(val){
    if (this.selectedfilterData.length > 0) {   
      this.filterData.filter(r => r.id != val.id).forEach(r => {
        r.selected = false;
      })
      this.selectedfilterData = [];     
    }
  
    if (!val.selected) {
      this.report = val;
      this.selectedfilterData.push(val); 
    } else if (val.selected) {            
      let index = this.selectedfilterData.findIndex(c => c.id == val.id);
      if (index > -1) { this.selectedfilterData.splice(index, 1); }            
    } 
  }

  generatePDF(){
    let photo = this.loadLocalAssetToBase64();

    var docDefinition = {
      content: [
        { text: 'QA APP - HSE Generated Report', style: 'header'},
        
        { text: 'Project: ' + this.report.project, style: 'header'},
        
        { text: 'Date: ' + new Date().toLocaleDateString("en-US").split("/:"), alignment: 'right' },

        { text: 'Report Type: ' + this.report.reportType, style: 'subheader'},

        { text: 'Location: ' + this.report.location},

        { text: 'Recepient: ' + this.report.recipients},

        { text: 'Date created: ' + this.report.formatDate},

        { text: 'Description created: ' + this.report.description},

        { text: 'Action Taken: ' + this.report.action},

        { text: 'Action Requested: ' + this.report.actionReq},

        { text: 'Incident: ' + this.report.incident},

        { text: 'Root cause: ' + this.report.rootcause},

        { text: "QC App", style: 'story', margin: [0, 20, 0, 20] }

      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      },
    }
    
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.download();
  }

  loadLocalAssetToBase64(){
    this.http.get(('./assets/home.png'), { responseType : 'blob'}).
    subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoData = reader.result;
      }
      reader.readAsDataURL(res);
    });
    
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    console.log(image);

    this.base64Image = image.base64String;
    this.photoPreview = `data:image/jpeg;base64,${this.base64Image}`;
  }

  download(){
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'report.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'report.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
}


