'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Snapdeal_Logo: element(by.xpath("//img[@title='Snapdeal']")),
        Buy_Button: element(by.id('buy-button-id')),
        Search_Button: element(by.className('')),
        Mobile_Mega_Menu: element(by.xpath('//*[@id="leftNavMenuRevamp"]/div[1]/div[2]/ul/li[2]/a/span[2]')),
        Smartphones: element(by.linkText("Smartphones")),
        Moto_E4_plus_image: element(by.id('5764608149254737118'))

};