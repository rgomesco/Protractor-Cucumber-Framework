'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Buy_Button: element(by.id('buy-button-id')),
        Search_Button: element(by.className('')),
        Mobile_Mega_Menu: element(by.xpath('//*[@id="leftNavMenuRevamp"]/div[1]/div[2]/ul/li[2]/a/span[2]')),
        Smartphones: element(by.linkText("Smartphones")),
        

};