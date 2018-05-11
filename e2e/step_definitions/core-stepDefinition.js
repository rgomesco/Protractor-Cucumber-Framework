// features/step_definitions/stepDefinitions
var {Given, When, Then} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');

// Set default cucumber timeout
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(11 * 1000);

//-----------Common steps with POM and Testdata------------------------


//------------------Element-----------------

When(/^In "([^"]*)" page, I click "([^"]*)"$/, function (pageName, variableName) {
    return coreHelper.elementClick(pageName, variableName);
});


//------------------Textbox-------------------

When(/^In "([^"]*)" page, I set the "([^"]*)" text box to "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.setTextBox(pageName, variableName, text);
});

Then(/^In "([^"]*)" page, the value of "([^"]*)" text box should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkTextBox(pageName, variableName, text);
});


//----------------Dropdown-----------

When(/^In "([^"]*)" page, I set the "([^"]*)" drop down to "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.setDropDown(pageName, variableName, text);
});

Then(/^In "([^"]*)" page, the value of "([^"]*)" drop down should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkDropDown(pageName, variableName, text);
});


//-----------------Checkbox-------------------------

When(/^In "([^"]*)" page, I mark the "([^"]*)" checkbox as "([^"]*)"$/, function (pageName, variableName, value) {
    //value can be 'checked' or 'unchecked'
    return coreHelper.setCheckbox(pageName, variableName, value);
});

Then(/^In "([^"]*)" page, the "([^"]*)" checkbox should be "([^"]*)"$/, function (pageName, variableName, expectedValue) {
    //checks the checkbox for a value
    return coreHelper.checkCheckboxValue(pageName, variableName, expectedValue);
});


//Check if dropdown is sorted
Then(/^In "([^"]*)" page, I check if "([^"]*)" dropdown is sorted$/, function(pageName, variableName, callback){
    return coreHelper.sortingCheck(pageName,variableName, callback)

});


//------------------Placeholder-------------

Then(/^In "([^"]*)" page, the placeholder text for "([^"]*)" field should be "([^"]*)"$/, function (pageName, variableName, text) {
    return coreHelper.checkPlaceholderText(pageName, variableName, text);
});



//-----------Step to input data in multiple fields using table----------
When(/^In "([^"]*)" page, I fill the fields with the following data$/, {timeout : 60 * 1000}, function (pageName, table, callback) {
    return coreHelper.fillForm(pageName, table, callback);
});

//-----------Step to check data in multiple fields using table----------
Then(/^In "([^"]*)" page, I check if the fields contain the following data$/, {timeout : 60 * 1000}, function (pageName, table, callback) {
    return coreHelper.verifyForm(pageName, table, callback);
});

