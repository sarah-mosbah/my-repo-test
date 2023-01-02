import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "../models/booking.interface";
import * as environment from '../../../../environments/environment'
@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    apigatewayUrl: string;
    serviceUrl: string;
    constructor(private httpClient: HttpClient) {
        this.apigatewayUrl =  environment.environment.apiGatewayV2;
        this.serviceUrl = "/patients";
    }

    public book(booking: Booking) : Observable<any> {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/visits/book`;
        const headers = {
            "x-access-token": localStorage.getItem('userToken') as string
        }
        return this.httpClient.post(url, booking, {headers});
    }
}