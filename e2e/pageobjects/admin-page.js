'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
var coreHelper = require('./../helpers/core-helpers.js');

module.exports = {

    Username: element(by.id('userName')),
    Country: element(by.id('countryName')),
    Dashboard: element(by.xpath("//div[@id='sidebar-menu']//span[contains(text(), 'Dashboard')]")),
    Monitors: element(by.xpath("//div[@id='sidebar-menu']//span[contains(text(), 'Monitors')]")),
    Enquiry: element(by.xpath("//div[@id='sidebar-menu']//span[contains(text(), 'Enquiry')]")),
    Utilities: element(by.xpath("//div[@id='sidebar-menu']//span[contains(text(), 'Utilities')]")),
    Bulk_Upload: element(by.xpath("//div[@id='sidebar-menu']//span[contains(text(), 'Bulk Upload')]")),
    Choose_File: element(by.name('BulkUpload')),
    Upload_File_Type: element(by.id('FileType')),
    Upload_Inventory_Type: element(by.id('InventoryType')),
    Upload_Button: element(by.xpath("//button[contains(text(), 'Upload')]")),
    Live_Tab: element(by.id('tab_Live_Anchor_Monitor')),
    Delete_Button: element(by.xpath("//input[@value='Delete']")),
    Enq_Success_Msg:  element(by.xpath("//button[contains(text(), 'Send Request')]/ancestor::table//label/strong")),
    Enq_Success_Msg1: element(by.xpath("/html/body/div[1]/div[8]/div/table[2]/tbody/tr[1]/td[3]/label/strong")),

    Product_Checkbox: element(by.xpath("//*[contains(text(),'M12345B6')]/ancestor::tr/td/input")),
    Publish_Button: element(by.xpath("//input[@value='Publish Monitor']")),
    
    storeEnqNo: function (callback) {
        var ele = this.Enq_Success_Msg1;
        ele.getText().then(function(msg){
            console.log("Success msg = "+ msg);
            var num = msg.replace( /^\D+/g, '');
            console.log("Enq no = "+num); 
            coreHelper.setExcelData('Sheet1', 'EnqNo', num, callback);
            callback();
        });
       
    },
};  