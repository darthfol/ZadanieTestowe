/// <reference types="Cypress" />

import { IUserAdressData } from "../../fixtures/IUserData";
import { EAddressOfDelivery, EPointOfDelivery, EPointOfDelivery as ETypeOfDelivery } from "../../shared/enums";
import { deliveryRadio, inpostBtn, nameOfPointInput, pointOfDevileryRadio, receiverEmailInput, receiverNameInput, receiverPhoneInput, senderCityinput, senderEmailinput, senderFlatNumberinput, senderHouseNumberinput, senderNameInput, senderPhoneinput, senderPostalCodeinput, senderStreetinput } from "./calulatorPage.el";

export const selectInpost = () => inpostBtn().click({force: true});

export const selectPoint = (nameOfPoint:ETypeOfDelivery) => deliveryRadio().check(nameOfPoint,{force: true});

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