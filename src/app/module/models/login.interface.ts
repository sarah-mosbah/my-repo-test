import { Gender } from "./enums/gender.enum";

export interface ILoginWithPhoneNumber {
    countryCode: string;
    phoneNumber: string;
}

export interface VerificationRequest {
    phone: string;
    countryCode: string;
    verificationCode?: string;
    password?: string;
}

export interface VerificationResponse {
    userProfile: UserProfile;
    token: string;
}

export interface UserProfile {
    firstName: string;
    firstNameAr: string;
    gender: Gender;
    id: number;
    img: string;
    lastName: string
    lastNameAr: string;
    phoneNumber: string;
    profileImg: string;
}