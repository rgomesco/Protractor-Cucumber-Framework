'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {

    Investor_FAQ_BreadcrumNavigation: element(by.xpath("//div[@id='breadcrumb']/span[contains(text(), 'Investor FAQs')]")),

};