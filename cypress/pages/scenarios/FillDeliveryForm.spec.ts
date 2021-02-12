import { IParcelItem, IUserAdressData } from "../../fixtures/IUserData"
import { addNewParcelPosition, fillParcelItem, fillReciverData, fillSenderData } from "../calculator/calculatorPage.po";
import { overBurdenAlert, sumOfCost } from "../calculator/calulatorPage.el";

export const FillFormTwoPositions = (sender:IUserAdressData,reciver:IUserAdressData,firstItem:IParcelItem,secondItem:IParcelItem) => {
    fillSenderData(sender);
    fillReciverData(reciver);
    fillParcelItem(0,firstItem);
    addNewParcelPosition();
    fillParcelItem(1,secondItem);
    sumOfCost().should('have.value',(firstItem.cost+secondItem.cost).toFixed(2));
    overBurdenAlert().should('not.exist');
}
