var {Given, When, Then} = require('cucumber');
var helper = require('../helpers/helpers');
var expect = helper.expect;
var should = helper.should;

    //-----------Then-------------------

Then(/^I launch$/, {timeout : 60 * 1000}, function () {
    return browser.get("https://www.google.co.in/")
    .then(browser.getCurrentUrl());
});



