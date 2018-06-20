'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
    Mobile_Option1_Swatch : element(by.id('color_name_0')),
    Mobile_Option2_Swatch : element(by.id('color_name_1')),
    Pincode : element(By.id("pincode-check")),
    Snapdeal_Logo: element(by.xpath("//img[@title='Snapdeal']")),
    Buy_Button: element(by.id('buy-button-id')),
    Describtion_color: element(by.xpath('//*[@id="prodDetails"]/div[2]/div[1]/div/div[2]/div/div/table/tbody/tr[13]/td[2]')),   
    Product_image:element(by.xpath('/html/body/div[2]/div[2]/div[5]/div[5]/div/div[1]/div/div/div[1]/ul/li[5]/span/span/span/input')),
    Product_enlarged_image:element(by.xpath("//img[@src='https://images-na.ssl-images-amazon.com/images/I/81YiCKvL29L._SY741_.jpg']"))

};