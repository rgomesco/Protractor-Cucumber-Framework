'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Search_Box: element(by.name('q')),
        Search_Button: element(by.className('lsb')),
        Images: element(by.className('q qs')),
    

};