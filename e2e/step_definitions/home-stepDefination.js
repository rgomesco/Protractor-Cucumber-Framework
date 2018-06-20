var {Given, When, Then} = require('cucumber');
var helper = require('../helpers/helpers');
var expect = helper.expect;
var should = helper.should;
var helpers = require('./../helpers/helpers.js');
var coreHelper = require('./../helpers/core-helpers.js');
//var prosecutor = require('./prosecutor.js');

//-------------------------------------Then

Then(/^I navigate to amazon homepage$/,{timeout:60 * 1000}, function(){
   return browser.get('https://www.amazon.in/')
   .then(browser.getCurrentUrl());
});

Then(/^I wait$/,{timeout:60 * 1000}, function(){
    return browser.sleep(5000);
 });


 Then(/^In "([^"]*)" page, Text of the "([^"]*)" should startwith "([^"]*)"$/, function(pageName,variableName, value, callback){
    return helpers.verifyStart(pageName,variableName,value, callback);
});
Then(/^In "([^"]*)" page, The text should contain "([^"]*)" or "([^"]*)"$/, function(pageName,value1, value2, callback){
    return helpers.verifyContains(pageName,value1 ,value2, callback);
});
Then(/^I navigate to prosecutor page$/,{timeout:60 * 1000}, function(){
    return browser.get('http://test.prosecutor.cuc.org/');
 });
//  Then(/^I fill out the entry form$/,{timeout:60 * 1000}, function(){
//     return prosecutor.fillOutEntry(Test[data]);
//  });

Then(/^In "([^"]*)" page, I press Tab key in "([^"]*)" textbox$/,{timeout:60 * 1000}, function(pageName, variableName){
        return coreHelper.pressTab(pageName,variableName);
      });