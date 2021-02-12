/// <reference types="Cypress" />

import { addNewParcelPosition, clickAllConcent, clickPayForPacked, clickSubmit, fillParcelItem, fillReciverData, fillSenderData, selectInpost, selectPoint, selectPointOfDevilery, typePointOfDelivery } from "../../pages/calculator/calculatorPage.po";
import { clickShowPrice, openPage, typeWeight } from "../../pages/mainModule/mainPage.po";
import { EAddressOfDelivery, ECountries, EPointOfDelivery, ETypeOfDelivery } from "../../shared/enums";
import {sender, reciver, czekoladki, kubek} from '../../fixtures/UserData'



describe('Recruitment test Automated tests',()=>{
    it('Wysłanie paczki do Ukrainy',()=>{
        openPage();
        typeWeight(15);
        clickShowPrice();
        
        selectInpost();
        selectPoint(ETypeOfDelivery.dostawaPunkt);
        selectPointOfDevilery(EPointOfDelivery.ukrposhta);
        typePointOfDelivery(EAddressOfDelivery.charukiv);
        fillSenderData(sender);
        fillReciverData(reciver);
        fillParcelItem(0,czekoladki);
        addNewParcelPosition();
        fillParcelItem(1,kubek);
        clickAllConcent();
        clickSubmit();
        clickPayForPacked();
    })
})