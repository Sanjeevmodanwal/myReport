import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.page.html',
  styleUrls: ['./walkin.page.scss'],
})
export class WalkinPage implements OnInit {

  constructor(private http: HttpClient) { }
  public items: Array<{ cname:string,walkin_chnd: string, total_walkin:string}> = [];
  ngOnInit() {
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), };
    this.http.get('http://essglobal.online/ess_crm/app/walkin.php?tag=walkin_report', httpOptions).subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
       
        this.items.push({
          cname: data[i].country_name,
          walkin_chnd: data[i].walkin_chnd,
          total_walkin: data[i].total_walkin,
          
        });
      }
    });
  }

}
