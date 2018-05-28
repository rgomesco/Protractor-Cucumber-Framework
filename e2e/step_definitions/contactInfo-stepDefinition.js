var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');
var admin = require('./../pageobjects/admin-page.js');

    //-----------Then-------------------

Then(/^I launch "([^"]*)" page$/, {timeout : 60 * 1000}, function (pageName) {
    if(pageName == 'outlet'){
    return browser.get("http://nldcavm87534336:8089/outlet/")
    .then(browser.getCurrentUrl());
    }else if(pageName == 'admin'){
        return browser.get("http://nldcavm87534336/login2")
        .then(browser.getCurrentUrl());
        }
});

Then(/^I refresh the page$/, {timeout : 30 * 1000}, function () {
    return browser.navigate().refresh();
});

Then(/^I store the enquiry number in test data$/, function(callback){
    return admin.storeEnqNo(callback);
});



