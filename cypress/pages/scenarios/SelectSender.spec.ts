import { ETypeOfDelivery, EUkrainDeliver,EAddressOfDelivery  } from "../../shared/enums";
import {selectInpost,selectPoint,selectPointOfDevilery,typePointOfDelivery} from "../../pages/calculator/calculatorPage.po"
import { overBurdenAlert, selectedNameOfPoint } from "../calculator/calulatorPage.el";
export const ChoosePoint = (TypeOfDelivery:ETypeOfDelivery,Deliver: EUkrainDeliver, PointOfDelivery:EAddressOfDelivery ) =>{
    selectInpost();
    selectPoint(TypeOfDelivery);
    selectPointOfDevilery(Deliver);
    typePointOfDelivery(PointOfDelivery);
    selectedNameOfPoint().should('contain.text', PointOfDelivery);
    
}