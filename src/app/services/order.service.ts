import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private getUrl: string = "http://ec2-18-216-112-230.us-east-2.compute.amazonaws.com:8080/order/";
  private getUrlCustomer: string = "http://ec2-18-216-112-230.us-east-2.compute.amazonaws.com:8080/cart/";

  headersRequest: any;

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'token': localStorage.getItem("token")!
  });


  getOrderDetails(): Observable<any> {
    return this.httpClient.get<any>(`${this.getUrl}details`, { headers: this.headers });
  }

  placeOrder(): Observable<any> {
    return this.httpClient.post<any>(`${this.getUrl}place`, " ", { headers: this.headers });
  }

  getRemoveAllBooksFromCart(): Observable<any> {
    return this.httpClient.delete<any>(`${this.getUrlCustomer}all`, { headers: this.headers });
  }

  getRemoveAllOrders(): Observable<any> {
    return this.httpClient.delete<any>(`${this.getUrl}deleteAll`, { headers: this.headers });
  }
}