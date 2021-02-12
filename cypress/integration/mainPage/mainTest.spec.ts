/// <reference types="Cypress" />

import { addNewParcelPosition, clickAllConcent, clickPayForPacked, clickSubmit, fillParcelItem, fillReciverData, fillSenderData, selectInpost, selectPoint, selectPointOfDevilery, typePointOfDelivery } from "../../pages/calculator/calculatorPage.po";

import {sender, reciver, czekoladki, kubek} from '../../fixtures/UserData'
import { OpenPageAndTypeWeight } from "../../pages/scenarios/openPage.spec";
import { ChoosePoint } from "../../pages/scenarios/SelectSender.spec";
import { EAddressOfDelivery, ETypeOfDelivery, EUkrainDeliver } from "../../shared/enums";
import { FillFormTwoPositions } from "../../pages/scenarios/FillDeliveryForm.spec";
import { getCombainWeight } from "../../shared/utils";



describe('Recruitment test Automated tests',()=>{
    it('Wysłanie paczki do Ukrainy',()=>{
        
        OpenPageAndTypeWeight(10);
        ChoosePoint(
            ETypeOfDelivery.dostawaPunkt,
            EUkrainDeliver.ukrposhta,
            EAddressOfDelivery.charnobai)
        FillFormTwoPositions(sender,reciver,czekoladki,kubek)
        clickAllConcent();
        clickSubmit();
        clickPayForPacked();
    })
    it('Wysłanie paczki do Ukrainy wersja charukiv',()=>{
        OpenPageAndTypeWeight(10);
        ChoosePoint(
            ETypeOfDelivery.dostawaPunkt,
            EUkrainDeliver.ukrposhta,
            EAddressOfDelivery.charukiv
        );
        FillFormTwoPositions(sender,reciver,czekoladki,kubek)   
    })
    it('Wysłanie paczki do ukrainy wersja charukiv z poprawioną wagą',()=>{
        OpenPageAndTypeWeight(getCombainWeight([czekoladki,kubek]));
        ChoosePoint(
            ETypeOfDelivery.dostawaPunkt,
            EUkrainDeliver.ukrposhta,
            EAddressOfDelivery.charukiv
        );
        FillFormTwoPositions(sender,reciver,czekoladki,kubek)
        clickAllConcent();
        clickSubmit();
        //cy.get('h3').should('have.text','**Podsumowanie zamówienia **');
        clickPayForPacked();
        cy.url().should('contain','https://secure.payu.com/');
    })
})