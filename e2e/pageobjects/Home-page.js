'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Snapdeal_Logo: element(by.xpath("//img[@title='Snapdeal']")),
        Buy_Button: element(by.id('add-to-cart-button')),
        Search_Button: element(by.className('')),
        Shopall: element(by.id('nav-link-shopall')),
        Mobiles_Computers: element(by.xpath('//*[@id="nav-flyout-shopAll"]/div[2]/span[6]')),
        Womens_Fashion:element(by.xpath('//*[@id="nav-flyout-shopAll"]/div[2]/span[8]/span')),
        Electronics:element(by.xpath('//*[@id="nav-flyout-shopAll"]/div[2]/span[7]/span')),
        All_Mobiles_Link: element(by.linkText('All Mobile Phones')),
        Shoes_Link:element(by.linkText('T-shirts & Polos')),
        Washing_Machine:element(by.linkText('Washing Machines')),
        Power_banks:element(by.linkText('Power Banks')),
        Motorola_checkbox:element(by.xpath('//*[@id="leftNav"]/ul[6]/div/li[3]/span/span/div/label/input')),
        //Moto_E4_plus_product: element(by.xpath('//*[@id="result_1"]/div/div[3]/div[1]/a/h2'))
//    Moto E4 Plus (Iron Gray, 32GB)
        pincode_header: element(by.id('nav-global-location-slot')),
        pincode: element(by.id('GLUXZipUpdateInput')),
        apply_button: element(by.xpath('//*[@id="GLUXZipUpdate"]/span/input')),
        pincode_message :element(by.xpath("//div[contains(text(),'Delivery options may vary for different locations')]")),
        Moto_E4_plus_product:element(by.xpath("/html/body/div[1]/div[2]/div/div[3]/div[2]/div/div[4]/div[1]/div/ul/li[2]/div/div[3]/div[1]/a/h2"))
};      