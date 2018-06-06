'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.use(chaiAsPromised).expect
module.exports = {
        
        Registration_Link: element(by.xpath("//div[@class='banner_login']//a[contains(text(), 'Create Online Account')]")),
        
        Product_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'PRODUCTS')]")),
        Online_Ordering: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'Online Ordering')]")),
        Resource_Services_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'RESOURCES & SERVICES')]")),
        Water_Rebates: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'Water Rebates')]")),
        Investor_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'INVESTORS')]")),
        Investor_FAQs: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'Investor Faqs')]")),
        HomeOwnwer_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'HOMEOWNER')]")),
        Selecting_Contractor: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'Selecting A Contractor')]")),
        Links_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'LINKS')]")),
        John_Deere_Financial: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'John Deere Financial')]")),
        Our_Company_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'OUR COMPANY')]")),
        About_Us: element(by.xpath("//div[@class = 'sub_menu_item_text' and contains(text(), 'About Us')]")),
        Locations_Menu: element(by.xpath("//div[@class = 'main_menu_item' and contains(text(), 'LOCATIONS')]")),
        // Product_Menu: element(by.xpath(""),
        // Product_Menu: element(by.xpath(""),
      
        
};