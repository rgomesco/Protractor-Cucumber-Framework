'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
    Mobile_Option1 : element(by.xpath('//*[@id="attribute-select-0"]/div[2]/div/div/div[2]/div')),
    Mobile_Option2 : element(by.xpath('//*[@id="attribute-select-0"]/div[2]/div/div/div[4]/div')),
    Pincode : element(By.id("pincode-check")),
    Snapdeal_Logo: element(by.xpath("//img[@title='Snapdeal']")),
    Buy_Button: element(by.id('buy-button-id')),
        
        

};