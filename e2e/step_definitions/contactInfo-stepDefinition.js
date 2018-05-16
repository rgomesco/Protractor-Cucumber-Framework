var {Given, When, Then} = require('cucumber');
var helper = require('../helpers/helpers');
var expect = helper.expect;
var should = helper.should;

    //-----------Then-------------------

Then(/^I launch$/, {timeout : 120 * 1000}, function () {
    return browser.get("https://www.amazon.in/")
    .then(browser.getCurrentUrl());
});



