/// <reference types="Cypress" />
export const inpostBtn = () => cy.get(':nth-child(1) > :nth-child(1) > .card > .card-body > .row > .mt-4 > .btn');

// metoda odbioru
export const deliveryRadio = () => cy.get('input[name="deliveryType"]');
export const pointOfDevileryRadio = () => cy.get('input[name="restrictedPointType"]');
export const nameOfPointInput = () => cy.get('input[type="search"]');

// formularz nadawca - odbiorca
export const senderNameInput = () => cy.get('#senderName');
export const senderPostalCodeinput = () => cy.get('#senderPostalCode');
export const senderCityinput = () => cy.get('#senderCity');
export const senderStreetinput = () => cy.get('#senderStreet');
export const senderHouseNumberinput = () => cy.get('#senderHouseNumber');
export const senderFlatNumberinput = () => cy.get('#senderFlatNumber');
export const senderPhoneinput = () => cy.get('#senderPhone');
export const senderEmailinput = () => cy.get('#senderEmail');

export const receiverNameInput = () => cy.get('#receiverName');
export const receiverPhoneInput = () => cy.get('#receiverPhone');
export const receiverEmailInput = () => cy.get('#receiverEmail');

// deklaracja celna
export const parcelItemDescriptionInput = (noOfItem: number) => cy.get(`input[name="parcelItemDescription-${noOfItem.toString()}"]`);
export const parcelItemQuantityInput = (noOfItem: number) => cy.get(`input[name="parcelItemQuantity-${noOfItem.toString()}"]`);
export const parcelItemWeightInput = (noOfItem: number) => cy.get(`input[name="parcelItemWeight-${noOfItem.toString()}"]`);
export const parcelItemValueClientCurrencyInput = (noOfItem: number) => cy.get(`input[name="parcelItemValueClientCurrency-${noOfItem.toString()}"]`);

//zgody
export const orderFormRegulationCheckBox = () => cy.get('#orderFormRegulation');
export const orderFormRegulation2CheckBox = () => cy.get('#orderFormRegulation2');
export const orderFormRegulation3CheckBox = () => cy.get('#orderFormRegulation3');
export const orderProhibitedGoodsCheckBox = () => cy.get('#orderProhibitedGoods');


// accept form
export const submitForm = (noOfItem: number) => cy.get('form[name="$ctrl.orderForm"] button[type="submit"]');
