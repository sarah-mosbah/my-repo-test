export interface FilterOptions {
    name?: string;
    city?: string;
    areas?: string;
    specialities?: string;
    visitCostFrom?: number;
    visitCostTo?: number;
    gender?: string;
    limit: number;
    skip: number;
}