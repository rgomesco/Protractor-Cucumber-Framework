Feature: outlet feature


Scenario: Scenario name
Given I launch "outlet" page
And I wait
And I wait
And I wait
And In "home" page, I click "Laptops_Tablets"
And I wait
And I refresh the page
And I wait

And In "home" page, I click "Save_For_Later_Button"
And I wait
And In "home" page, I click "Send_Request_Button"
When In "home" page, I fill the fields with the following data
|field|content|
|Enq_Name|TD_outlet_enquiry_name|
|Enq_PhoneNo|TD_outlet_enquiry_phoneNo|
|Enq_BestTime|TD_outlet_enquiry_bestTime|
|Enq_Email|TD_outlet_enquiry_email|
|Enq_Additional_info|TD_outlet_enquiry_AddInfo|
And In "home" page, I click "Enq_Save_Button"
Then I should see element containing "Enquiry sent successfully" text
And In "home" page, I click "Enq_Success_Popup_Close"
Then I should see element containing "Successfully submitted the enquiry!!! EnquiryID:" text
And I store the enquiry number in test data


Scenario: check enq in admin
When I launch "admin" page
And I wait
When I launch "admin" page
And In "login" page, I fill the fields with the following data
|field|content|
|Username|rgomesco|
|Region|APAC|
And In "login" page, I click "Login_Button"
And In "login" page, I fill the fields with the following data
|field|content|
|Region|APAC|
|Country|Australia|
And In "login" page, I click "Login_Button"
And In "admin" page, I click "Dashboard"
And In "admin" page, I click "Enquiry"
And I wait
And I wait