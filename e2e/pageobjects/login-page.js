'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {

       URL: "http://nldcavm87534336/login2",
       Username: element(by.id('Username')),
       Region: element(by.id('Region')),
       Country: element(by.id('Country')),
       Login_Button: element(by.xpath("//button[contains(text(), 'Login')]")),

};