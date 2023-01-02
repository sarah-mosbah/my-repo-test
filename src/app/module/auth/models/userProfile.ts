export interface UserProfile {
    firstName: string;
    firstNameAr: string;
    id: number;
    img: string;
    lastName: string
    lastNameAr: string;
    phoneNumber: string;
    profileImg: string;
}
export interface UserAuth {
  userProfile: UserProfile;
  token: string;
}