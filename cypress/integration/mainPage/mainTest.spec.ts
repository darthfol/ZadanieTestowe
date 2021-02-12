/// <reference types="Cypress" />

import { fillReciverData, fillSenderData, selectInpost, selectPoint, selectPointOfDevilery, typePointOfDelivery } from "../../pages/calculator/calculatorPage.po";
import { clickShowPrice, openPage, typeWeight } from "../../pages/mainModule/mainPage.po";
import { EAddressOfDelivery, ECountries, EPointOfDelivery, ETypeOfDelivery } from "../../shared/enums";
import {sender, reciver} from '../../fixtures/UserData'

describe('Recruitment test Automated tests',()=>{
    it('Wysłanie paczki do Ukrainy',()=>{
        openPage();
        typeWeight(10);
        clickShowPrice();
        
        selectInpost();
        selectPoint(ETypeOfDelivery.dostawaPunkt);
        selectPointOfDevilery(EPointOfDelivery.ukrposhta);
        typePointOfDelivery(EAddressOfDelivery.charukiv);
        fillSenderData(sender);
        fillReciverData(reciver);
    })
})