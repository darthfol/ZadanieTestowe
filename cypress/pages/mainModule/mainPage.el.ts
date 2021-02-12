/// <reference types="Cypress" />

import { ECountries } from '../../shared/enums'

export const url = () => cy.url();
export const weightInputField = () => cy.get('#js-valuation-form form input');
export const showPriceBtn = () => cy.get('#js-valuation-form form button');
