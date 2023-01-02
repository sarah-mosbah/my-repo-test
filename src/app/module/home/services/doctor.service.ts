import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FilterOptions } from "../../shared/models/filterOptions.interface";
import * as environment from '../../../../environments/environment'
@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    apigatewayUrl: string;
    serviceUrl: string;
    featureUrl: string;
    constructor(private httpClient: HttpClient) {
        this.apigatewayUrl =  environment.environment.apiGatewayV2;
        this.serviceUrl = "/patients";
        this.featureUrl = "/doctors";
    }

    public getAllDoctors(filterOptions: FilterOptions) {
        const {name, city, areas, specialities, skip, limit, 
            visitCostFrom, visitCostTo, gender} 
        = filterOptions;
        let url = `${this.apigatewayUrl}${this.serviceUrl}${this.featureUrl}?limit=${limit}`;
        if(skip)
            url = `${url}&skip=${skip}&`;
        if(name)
            url = `${url}&name=${name}&`;
        if(city)
            url = `${url}&city=${city}&`;
        if(areas)
            url = `${url}&areas=${areas}&`;
        if(specialities)
            url = `${url}&specialities=${specialities}&`;
        if(visitCostFrom)
            url = `${url}&visitCostFrom=${visitCostFrom}&`;
        if(visitCostTo)
            url = `${url}&visitCostTo=${visitCostTo}&`;
        if(gender)
            url = `${url}&gender=${gender}`;
        const headers = {
            "x-access-token": localStorage.getItem('userToken') as string
        }
        return this.httpClient.get(url, {headers});
    }

    
}
