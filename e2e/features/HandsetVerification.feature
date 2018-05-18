Feature: Mobile Handset

   covering different scenarios

@Test1
Scenario: Checking Colours for mobiles
Given I navigate to snapdeal homepage
When In "Home" page, I hover the mouse over "Mobile_Mega_Menu"
And The title of the page should be "TD_all_HomeData_Title"
And In "Home" page, I click "Smartphones"
And In "Home" page, I click " Moto_E4_plus_image"
Then The title of the page should be "TD_all_PDPData_Title"
Then In "product" page, Text of the "Mobile_Option1" should be "TD_all_PDPData_MobileGold"
Then In "product" page, Text of the "Mobile_Option2" should be "TD_all_PDPData_MobileGrey"

@Test1
Scenario: Checking Delevery items with valid pincode
When In "product" page, I set the "Pincode" text box to "TD_all_PDPData_Pincode"

