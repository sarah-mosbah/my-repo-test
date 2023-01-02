import { SelectInput } from "./selectInput.interface";

export interface SelectInputResponse {
    message: string;
    data: SelectInput[];
    count: number;
}