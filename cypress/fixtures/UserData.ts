import { ECurrency } from "../shared/enums";
import { IParcelItem, IUserAdressData } from "./IUserData";

export const sender: IUserAdressData = {
    name: 'Mobisense Monika Mazurek',
    street: 'Olszewskiego',
    homeNo: 6,
    localNo: 313,
    city: 'Kielce',
    postCode: '25-663',
    nip: '6572441180',
    phoneNo: '664540929',
    mail: 'monika@sourceful.nl'
}

export const reciver: IUserAdressData = {
    name : 'Natalia Ivanovak',
    street: 'Olszewskiego',
    homeNo: 1,
    localNo: 1,
    city: 'Lenina St',
    postCode: '19900',
    nip: '6572441180',
    phoneNo: '505032236',
    mail: 'natalia@ivanova.pl'
}

export const czekoladki: IParcelItem={
    itemName: 'Czekoladki',
    quantity: 2,
    weight: 10,
    cost: 20,
    currency: ECurrency.euro
}
export const kubek: IParcelItem = {
    itemName: 'Kubek',
    quantity: 2,
    weight: 2,
    cost: 5,
    currency: ECurrency.euro
}