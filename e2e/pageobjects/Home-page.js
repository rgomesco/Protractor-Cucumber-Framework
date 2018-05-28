'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Outlet_For_Home: element(by.xpath("//button[contains(text(), 'Outlet for Home')]")),
        Laptops_Tablets_MenuOption: element(by.xpath("//dic[@class='dropdown-content']//a[contains(text(), 'Laptops & Tablets')]")),
        Alienware_Laptops_MenuOption: element(by.xpath("//dic[@class='dropdown-content']//a[contains(text(), 'Alienware Laptops')]")),
        Laptops_Tablets: element(by.xpath("//a[contains(text(), 'Dell Outlet for Home')]/ancestor::div[@class='more-info-tab clearfix']/following-sibling::div//h3/span[contains(text(), 'Laptops & Tablets')]")),
        Monitors: element(by.xpath("//a[contains(text(), 'Dell Outlet for Home')]/ancestor::div[@class='more-info-tab clearfix']/following-sibling::div//h3/span[contains(text(), 'Monitors')]")),
        Saved_Item: element(by.id('linkSavedItems')),

        Save_For_Later_Button: element(by.xpath("//button/*[contains(text(), 'Save For Later')]")),
        Quantity: element(by.id('QuantityVal_1')),
        Send_Request_Button: element(by.xpath("//button[contains(text(), 'Send Request')]")),
        Item_Count: element(by.id('SelectedItemsCount_0_')),
        Enq_Name: element(by.id('Name')),
        Enq_PhoneNo: element(by.id('PhoneNo')),
        Enq_BestTime: element(by.id('BTTR')),
        Enq_Email: element(by.id('EmailId')),
        Enq_Additional_info: element(by.id('AddInfo')),
        Enq_Save_Button: element(by.id('enquirySave')),
        Enq_Success_Popup_Close: element(by.xpath("//div[@class='success']//button[contains(text(), 'Close')]")),
        
};