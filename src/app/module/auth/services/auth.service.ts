import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as environment from '../../../../environments/environment'
import { VerificationRequest, VerificationResponse } from "../../models/login.interface";
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apigatewayUrl: string;
    private serviceUrl: string;
    constructor(private httpClient: HttpClient) {
        this.apigatewayUrl =  environment.environment.apiGatewayV1;
        this.serviceUrl = "/auth";
    }
    loginWithPhoneNumber$(phone: string, countryCode: string): Observable<{message: string}> {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/login-with-phone-1`;
        const headers = new HttpHeaders().set('user-type', 'customer');
        return this.httpClient.post<{message: string}>(url, {phone, countryCode}, {headers});
    }
    loginWithEmail$(email: string, password: string): Observable<{message: string}> {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/login-with-email`;
        const headers = new HttpHeaders().set('user-type', 'customer');
        return this.httpClient.post<{message: string}>(url, {email, password}, {headers});
    }
    verifyPhoneNumber$(verificationData: VerificationRequest): Observable<VerificationResponse | any>  {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/login-with-phone-2`;
        const headers = new HttpHeaders().set('user-type', 'customer');
        const data = {
            ...verificationData,
            device: {
                id: "1",
                token: "null",
                platform: "other"
            }
        }
        return this.httpClient.post<VerificationResponse>(url, data, {headers});
       
    }
    public resendVerificationCode$(phone: string, countryCode: string) {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/resend/verify/sms`;
        const headers = new HttpHeaders().set('user-type', 'customer');
        return this.httpClient.post<{message: string}>(url, {phone, countryCode}, {headers});
    }

    public logout$()  {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/logout`;
        const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token') as string);
        return this.httpClient.delete(url, {headers});
    }
    public loginWithFacebook$(token: string) {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/facebook/login`;
        const body = {
            accessToken: token,
            device: {
                id: "no_id",
                token: "device_token",
                platform: "ios"
            }
        }
        const headers = new HttpHeaders().set('user-type', 'customer');
        return this.httpClient.post(url, body, {headers});
    }

    public loginWithApple$(token: string) {
        const url = `${this.apigatewayUrl}${this.serviceUrl}/apple/login`;
        const body = {
            accessToken: token,
            device: {
                id: "no_id",
                token: "device_token",
                platform: "ios"
            }
        }
        const headers = new HttpHeaders().set('user-type', 'customer');
        return this.httpClient.post(url, body, {headers});
    }
}