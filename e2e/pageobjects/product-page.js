'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Snapdeal_Logo: element(by.xpath("//img[@title='Snapdeal']")),
        Buy_Button: element(by.id('buy-button-id')),
        
        

};