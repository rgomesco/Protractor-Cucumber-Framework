'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Company_Name: element(by.id('txt_company_name')),
        Customer_Number: element(by.id('txt_customer_number')),
        Email_Address: element(by.id('txt_email_address')),
        Contact_Name: element(by.id('txt_contact_name')),
        Street_Address: element(by.id('txt_street_address')),
        City_State_Zip: element(by.id('txt_city_state_zip')),
        Phone_Number: element(by.id('txt_phone')),
        OK_button: element(by.xpath("//table[@id='btn_ok']//div[contains(text(), 'OK')]")),
       
        

};