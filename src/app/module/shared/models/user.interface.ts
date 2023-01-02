import { Clinic } from "./clinic.interface";

export interface Doctor {
    name: string;
    profileImg: string;
    about: string;
    doctorAuthId: number;
    speciality?: string;
    rating?: number;
    cheapestClinic: Clinic;
    clinics: Clinic[];
}