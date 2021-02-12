import { clickShowPrice, openPage, typeWeight } from "../mainModule/mainPage.po";

//open page
export const OpenPageAndTypeWeight = (weight: number)=>{
    openPage();
    typeWeight(weight);
    clickShowPrice();
}