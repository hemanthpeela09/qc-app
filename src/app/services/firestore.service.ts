import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Hse } from '../shared/hse.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class FirestoreService {

    private reportsCollection: AngularFirestoreCollection<Hse>;

    private reports: Observable<Hse[]>;
  
    constructor(public firestore: AngularFirestore) {

        this.reportsCollection = firestore.collection<Hse>('hseReports');
        this.reports = this.reportsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map( a=> {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc;
                    return {id, ...data };
                })
            })
        )
    }

   /* createHSEReport(
        form: String,
        project: String,
        location: String,
        reportType: String,
        date: Date,
        description: String,
        action: String,
        actionReq: String,
        incident: String,
        rootcause: String,
        recipients: String
    ) :Promise<void> {}*/

    /*createHSEReport(hse:Hse): Promise<void>{
        const id = this.firestore.createId();
        return this.firestore.doc('reports/${id}').set({hse});
    }*/

    createHSEReport(hse:Hse){
        return this.reportsCollection.add(hse);
    }

    getHSEReportById(id){
        return this.reportsCollection.doc<Hse>(id).valueChanges();
    }

    getHSEReports(){
        return this.reports;
    }

    deleteReport(id){
        return this.reportsCollection.doc<Hse>(id).delete;
    }
  }