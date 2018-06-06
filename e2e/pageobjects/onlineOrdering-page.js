'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');

module.exports = {

Proceed_Button: element(by.xpath("//*[@class = 'button_link' and contains(text(), 'Proceed to My Account Page')]"))
};  