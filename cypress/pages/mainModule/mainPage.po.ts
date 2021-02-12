/// <reference types="Cypress" />

import { ECountries } from "../../shared/enums"
import { showPriceBtn, weightInputField } from "./mainPage.el"

export const typeWeight = (weight: number) =>{
    weightInputField().type(weight.toString());
}
export const clickShowPrice = () => {
    showPriceBtn().click();
}

export const openPage = () =>{
    cy.visit('/pl/homepage');
}