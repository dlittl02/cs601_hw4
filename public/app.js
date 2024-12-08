"use strict";
/**
 * Deasia Little
 * MET CS601 - Assignment 4
 * Country Management System
 */
// Rain class
class RainCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
// Snow class
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
// Island class
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a land size of ${this.landSize}.`;
        return element;
    }
}
// Test data for app
const countries = [
    new RainCountry("United States", 11),
    new SnowyCountry("Norway", 52),
    new RainCountry("Brazil", 40),
    new IslandCountry("Japan", 6316468),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 652458),
    new SnowyCountry("Iceland", 633),
    new SnowyCountry("Canada", 0)
];
// List of SnowyCountry objects
const listSnowyCountries = [];
// Build listSnowyCountries
function isSnowCountry(country) {
    if ("snowLevel" in country && country.snowLevel !== undefined) {
        return country;
    }
    else {
        return null;
    }
}
// Check if each object in countries is a Snowy country, if it is add
// it to the list
let totalSnowLevel = 0;
countries.forEach((country) => {
    if (isSnowCountry(country) && country instanceof SnowyCountry) {
        listSnowyCountries.push(country);
        totalSnowLevel += country.snowLevel;
    }
});
// Function to render information to the DOM
function renderToDOM() {
    // Select DOM elements
    const countriesDiv = document.getElementById("countries");
    const snowCountriesDiv = document.getElementById("snowCountries");
    const totalSnowLevelDiv = document.getElementById("totalSnowLevel");
    countries.forEach((country) => {
        const countryInfo = document.createElement("p");
        countryInfo.textContent = country.getInfo(countryInfo).textContent;
        if (countriesDiv)
            countriesDiv.appendChild(countryInfo);
    });
    listSnowyCountries.forEach((country) => {
        const snowCountryInfo = document.createElement("p");
        snowCountryInfo.textContent = country.getInfo(snowCountryInfo).textContent;
        if (snowCountriesDiv)
            snowCountriesDiv.appendChild(snowCountryInfo);
    });
    const snowLevelTotal = document.createElement("p");
    snowLevelTotal.textContent = "Total snow level:" + totalSnowLevel.toString();
    if (totalSnowLevelDiv)
        totalSnowLevelDiv.appendChild(snowLevelTotal);
}
// Call renderToDOM to update the DOM
renderToDOM();
