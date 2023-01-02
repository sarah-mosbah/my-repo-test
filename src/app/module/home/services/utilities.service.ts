import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as environment from '../../../../environments/environment'
import { Observable } from "rxjs";
import { SelectInputResponse } from "../../shared/models/selectInput.response";
@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    specialityServiceUrl: string;
    areaServiceUrl: string;
    apigatewayUrl: string;
    constructor(private httpClient: HttpClient) {
        this.apigatewayUrl =  environment.environment.apiGatewayV1;
        this.specialityServiceUrl = "/specialities";
        this.areaServiceUrl = '/areas'
    }

    public getSpecialities$(): Observable<SelectInputResponse> {
        const url = `${this.apigatewayUrl}${this.specialityServiceUrl}`;
        const headers = {
            "x-access-token": localStorage.getItem('userToken') as string
        }
        return this.httpClient.get<SelectInputResponse>(url, {headers});
    }

    public getAllAreas$(): Observable<SelectInputResponse> {
        const url = `${this.apigatewayUrl}${this.areaServiceUrl}?select=id,name&isNotPopulated=true`;
        return this.httpClient.get<SelectInputResponse>(url);
    }
}