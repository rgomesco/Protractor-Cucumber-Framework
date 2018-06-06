'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {

    Sign_In_Button: element(by.xpath("//div[@class='button1']//a[contains(text(), 'Sign In')]")),

};