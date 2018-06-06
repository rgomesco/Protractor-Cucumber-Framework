'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {

    About_Us_Img: element(by.xpath("//img[@alt='SOAboutUs')]")),
    About_Us_BreadcrumNavigation: element(by.xpath("//span[@class='breadcrumb_current_link' and contains(text(), 'About Us')]")),
    

};