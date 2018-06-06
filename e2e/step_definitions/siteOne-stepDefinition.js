var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');

    //-----------Then-------------------

Then(/^I launch "([^"]*)" page$/, {timeout : 100 * 1000}, function (pageName) {
    if(pageName == 'home'){
    return browser.get("https://siteone.com/")
    .then(browser.getCurrentUrl());
    }
});





