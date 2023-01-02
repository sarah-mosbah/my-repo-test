export interface ClinicSchedule {
    day: string;
    isFirstServeBased: boolean;
    ranges?: PeriodRange[];
    timeSlots?: PeriodRange[];
}
 
export interface PeriodRange {
    startsAt: string;
    endsAt: string;
}