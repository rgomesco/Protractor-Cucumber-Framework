Feature: Home page test cases

Scenario: Navigation to Online Ordering page
Given I launch "home" page
And In "home" page, I hover the mouse over "Product_Menu"
And In "home" page, I click "Online_Ordering"
Then In "onlineOrdering" page, I should see "Proceed_Button" element

Scenario: Navigation to Water Rebates page
And In "home" page, I hover the mouse over "Resource_Services_Menu"
And In "home" page, I click "Water_Rebates"
Then In "waterRebates" page, I should see "States" element

Scenario: Navigation to investor FQAs page
And In "home" page, I hover the mouse over "Investor_Menu"
And In "home" page, I click "Investor_FAQs"
Then In "investorFAQ" page, I should see "Investor_FAQ_BreadcrumNavigation" element
And I click on browser back button

Scenario: Registration
And In "home" page, I click "Registration_Link"
And In "registration" page, I fill the fields with the following data
|field|content|
|Company_Name|TD_user_registration_companyName|
|Customer_Number|TD_user_registration_customerNo|
|Email_Address|TD_user_registration_email|
|Contact_Name|TD_user_registration_contactName|
|Street_Address|TD_user_registration_street|
|City_State_Zip|TD_user_registration_cityStateZip|
|Phone_Number|TD_user_registration_phoneNo|