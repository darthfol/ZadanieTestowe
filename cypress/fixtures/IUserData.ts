 import { ECountries } from '../shared/enums'
 export interface IUserAdressData{
    name:string;
    street: string;
    homeNo: number;
    localNo?: number ;
    city: string;
    postCode: string;
    nip: string;
    phoneNo: string;
    mail: string;
}

export interface ICustomsDeclaration{
    noDeclaration: number;
    itemName: string;
    quantity: number;
    weight: number;
    cost: number;
    noTar: string;
    orginCountry: ECountries
}