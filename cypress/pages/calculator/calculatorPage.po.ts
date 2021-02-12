/// <reference types="Cypress" />

import { IParcelItem, IUserAdressData } from "../../fixtures/IUserData";
import { EAddressOfDelivery, EPointOfDelivery, EPointOfDelivery as ETypeOfDelivery } from "../../shared/enums";
import { submitForm, deliveryRadio, inpostBtn, nameOfPointInput, newParcelPositionBtn,
     orderFormRegulation3CheckBox,orderFormRegulation2CheckBox, orderFormRegulationCheckBox,
      orderProhibitedGoodsCheckBox, parcelItemDescriptionInput, parcelItemQuantityInput,
       parcelItemValueClientCurrencyInput, parcelItemWeightInput, pointOfDevileryRadio,
        receiverEmailInput, receiverNameInput, receiverPhoneInput, senderCityinput,
         senderEmailinput, senderFlatNumberinput, senderHouseNumberinput, senderNameInput,
          senderPhoneinput, senderPostalCodeinput, senderStreetinput, payForPacked } from "./calulatorPage.el";

export const selectInpost = () => inpostBtn().click({force: true});

export const selectPoint = (nameOfPoint: ETypeOfDelivery) => deliveryRadio().check(nameOfPoint,{force: true});

export const selectPointOfDevilery = (pointOfDelivery: EPointOfDelivery) => pointOfDevileryRadio().check(pointOfDelivery,{force: true})

export const typePointOfDelivery = (nameOfPoint: EAddressOfDelivery) => nameOfPointInput().type(nameOfPoint).type('{enter}');

export const fillSenderData = (sender: IUserAdressData)=>{
    senderNameInput().type(sender.name);
    senderPostalCodeinput().type(sender.postCode)
    senderCityinput().type(sender.city)
    senderStreetinput().type(sender.street)
    senderHouseNumberinput().type(sender.homeNo.toString())
    sender.localNo ? senderFlatNumberinput().type(sender.localNo.toString()) : '';
    senderPhoneinput().type(sender.phoneNo)
    senderEmailinput().type(sender.mail)
}
export const fillReciverData = (reciver : IUserAdressData)=>{
    receiverNameInput().type(reciver.name)
    receiverPhoneInput().type(reciver.phoneNo)
    receiverEmailInput().type(reciver.mail)
}

export const fillParcelItem = (no:number, parcelItem: IParcelItem) => {
    parcelItemDescriptionInput(no).type(parcelItem.itemName);
    parcelItemQuantityInput(no).type(parcelItem.quantity.toString());
    parcelItemWeightInput(no).type(parcelItem.weight.toString());
    parcelItemValueClientCurrencyInput(no).type(parcelItem.cost.toString())
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