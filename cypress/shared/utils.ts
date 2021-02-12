import { IParcelItem } from "../fixtures/IUserData"

export const getCombainWeight = (item:IParcelItem[])=>{
    let weight: number =0;
    item.forEach(element => {
        weight += element.weight;
    });
    return weight;
}