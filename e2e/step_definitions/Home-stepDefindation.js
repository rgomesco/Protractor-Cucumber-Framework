var {Given, When, Then} = require('cucumber');
var helper = require('../helpers/helpers');
var expect = helper.expect;
var should = helper.should;


//-------------------------------------Then

Then(/^I navigate to snapdeal homepage$/,{timeout:60 * 1000}, function(){
   return browser.get('https://www.snapdeal.com/')
   .then(browser.getCurrentUrl());
});

Then(/^I wait for "([^"]*)" seconds$/,{timeout:60 * 1000}, function(time){
    return browser.sleep(time+"000");
 });

 