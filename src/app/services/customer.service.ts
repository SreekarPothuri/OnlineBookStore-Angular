import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private getUrl: string = "http://ec2-18-216-112-230.us-east-2.compute.amazonaws.com:8080/customer/";


  headersRequest: any;

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'token': localStorage.getItem("token")!
  });


  addCustomerDetails(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.getUrl}details`, data, { headers: this.headers });
  }
}