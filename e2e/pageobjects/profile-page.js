'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Search_Box: element(by.name('q')),
        Search_Button: element(by.className('lsb')),
        Images: element(by.className('q qs')),
        MenuLevel1: element(by.id('nav-link-shopall')),
        menu2: element(by.xpath('//*[@id="nav-flyout-shopAll"]/div[2]/span[5]')),

};