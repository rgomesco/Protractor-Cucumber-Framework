
'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
    //Casual_Shoes_Banner: element(by.cssContainingText('element.style','CASUAL SHOES'))
    Casual_Shoes_Banner:element(by.xpath("//img[@src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Shoes/March/ValueDay/Store/rjanakir_2018-03-06T13-15_4e3dfd_jaisankt_2017-11-10T07-02_64f7da_img-2._CB500171361_.jpg']")),  
    Carlton_london_Checkbox:element(by.xpath('//*[@id="leftNavContainer"]/ul[7]/div/li[3]/span/a')),  
    price_filter_1000_2500:element(by.linkText('₹1,000 - ₹2,500')),
    sort_filter:element(by.id('sort')),
    price:element.all(by.xpath("//*[contains(@id, 'result_')]/div/div[3]/div[2]/a/span")),
    StarsPlus4:element(by.xpath('//*[@id="leftNav"]/ul[9]/div/li[1]/span/a/span')),
    Stars:element(by.xpath("//*[contains(@id, 'result_')]/div/div[8]/span/span/a/i[1]/span")),
    MI_checkbox:element(by.name("s-ref-checkbox-Mi")),
    Redmi_Note5:element(by.xpath("//h2[@data-attribute='Redmi 5 (Black, 32GB)']")),
};
