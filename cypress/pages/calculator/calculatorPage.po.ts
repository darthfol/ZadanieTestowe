/// <reference types="Cypress" />

import { IParcelItem, IUserAdressData } from "../../fixtures/IUserData";
import { EAddressOfDelivery, EUkrainDeliver, EUkrainDeliver as ETypeOfDelivery } from "../../shared/enums";
import { submitForm, deliveryRadio, inpostBtn, nameOfPointInput, newParcelPositionBtn,
     orderFormRegulation3CheckBox,orderFormRegulation2CheckBox, orderFormRegulationCheckBox,
      orderProhibitedGoodsCheckBox, parcelItemDescriptionInput, parcelItemQuantityInput,
       parcelItemValueClientCurrencyInput, parcelItemWeightInput, pointOfDevileryRadio,
        receiverEmailInput, receiverNameInput, receiverPhoneInput, senderCityinput,
         senderEmailinput, senderFlatNumberinput, senderHouseNumberinput, senderNameInput,
          senderPhoneinput, senderPostalCodeinput, senderStreetinput, payForPacked } from "./calulatorPage.el";
          
export const openCalculatorPage = (weight:number) => cy.visit(`pl/calculator.html?weight=${weight.toString()}`);
export const selectInpost = () => inpostBtn().click({force: true});

export const selectPoint = (nameOfPoint: ETypeOfDelivery) => deliveryRadio().check(nameOfPoint,{force: true});

export const selectPointOfDevilery = (pointOfDelivery: EUkrainDeliver) => pointOfDevileryRadio().check(pointOfDelivery,{force: true})

export const typePointOfDelivery = (nameOfPoint: EAddressOfDelivery) => nameOfPointInput().type(nameOfPoint).type('{enter}');

export const fillSenderData = (sender: IUserAdressData)=>{
    senderNameInput().type(sender.name).should('have.class','ng-valid');
    senderPostalCodeinput().type(sender.postCode).should('have.class','ng-valid')
    senderCityinput().type(sender.city).should('have.class','ng-valid')
    senderStreetinput().type(sender.street).should('have.class','ng-valid')
    senderHouseNumberinput().type(sender.homeNo.toString()).should('have.class','ng-valid')
    sender.localNo ? senderFlatNumberinput().type(sender.localNo.toString()).should('have.class','ng-valid') : '';
    senderPhoneinput().type(sender.phoneNo).should('have.class','ng-valid')
    senderEmailinput().type(sender.mail).should('have.class','ng-valid')
}

export const fillReciverData = (reciver : IUserAdressData)=>{
    receiverNameInput().type(reciver.name).should('have.class','ng-valid')
    receiverPhoneInput().type(reciver.phoneNo).should('have.class','ng-valid')
    receiverEmailInput().type(reciver.mail).should('have.class','ng-valid')
}

export const fillParcelItem = (no:number, parcelItem: IParcelItem) => {
    parcelItemDescriptionInput(no).type(parcelItem.itemName).should('have.class','ng-valid');
    parcelItemQuantityInput(no).type(parcelItem.quantity.toString()).should('have.class','ng-valid');
    parcelItemWeightInput(no).type(parcelItem.weight.toString()).should('have.class','ng-valid');
    parcelItemValueClientCurrencyInput(no).type(parcelItem.cost.toString()).should('have.class','ng-valid');
}
export const addNewParcelPosition = () => newParcelPositionBtn().click();

export const clickAcceptFirstConcent = () => orderFormRegulationCheckBox().check({force: true});
export const clickAcceptSecondConcent = () => orderFormRegulation2CheckBox().check({force: true});
export const clickAcceptThirdConcent = () => orderFormRegulation3CheckBox().check({force: true});
export const clickAcceptForthConcent = () => orderProhibitedGoodsCheckBox().check({force: true});
export const clickAllConcent = () => {
    clickAcceptFirstConcent();
    clickAcceptSecondConcent();
    clickAcceptThirdConcent();
    clickAcceptForthConcent();
}


export const clickSubmit = () => submitForm().click();

export const clickPayForPacked = () => payForPacked().click()