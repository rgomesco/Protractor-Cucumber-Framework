'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {

    Selecting_Contractor_BreadcrumNavigation: element(by.xpath("//span[@class='breadcrumb_current_link' and contains(text(), 'Selecting A Contractor')]")),

};