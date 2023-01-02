import { Area } from "./area.interface";

export interface Clinic {
    id: number;
    name: string;
    area: Area;
    areaId: number;
    cityId: number;
    description: string;
    buildingNumber: number;
    streetName: string;
    visitCost: number;
    visitDuration: number;
}
