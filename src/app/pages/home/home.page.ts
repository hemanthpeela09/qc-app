import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /*private database: SQLiteObject;
  constructor(private sqlite: SQLite) { 
    const conn = this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })

      if (conn == null) throw Error('Failed to create database connection')
      conn.then((db: SQLiteObject) => {
      
          this.database = db;
          db.executeSql('create table user(name VARCHAR(32))', [])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));
          
          return 
        })
        .catch(e => console.log(e));
    }*/

  

} 
