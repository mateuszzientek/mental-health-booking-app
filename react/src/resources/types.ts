export interface Specialist {
    id: number;
    age: string;
    avatar: string;
    descriptionLong: string;
    descriptionShort: string;
    experience: string;
    gender: string;
    languages: string[];
    name: string;
    quantity_appointments: number;
    specializations: string[];
}

export interface ServerErrors {
    [key: string]: string[];
}
