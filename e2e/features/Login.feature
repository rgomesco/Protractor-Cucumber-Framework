Feature: login scenarios

@run
Scenario: Login
Given I launch "admin" page
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
Then I should see element containing "Global Dell Outlet" text

@run
Scenario: bulk upload
When In "admin" page, I click "Utilities"
And In "admin" page, I click "Bulk_Upload"
And In "admin" page, I upload "TD_outlet_upload_filePath" in "Choose_File" element
And In "admin" page, I set the "Upload_Inventory_Type" drop down to "TD_outlet_upload_inventoryType"
And In "admin" page, I click "Upload_Button"
And In "admin" page, I click "Dashboard"
And In "admin" page, I click "Monitors"
And I wait for "2" seconds
And In "admin" page, I click "Product_Checkbox"
And In "admin" page, I click "Publish_Button"

@run
Scenario: outlet
Given I launch "outlet" page
And I wait for "15" seconds
And In "home" page, I click "Monitors"
And I wait for "2" seconds
Then In "home" page, I should see "Uploaded_Product" element

@run
Scenario: delete
Given I launch "admin" page
Given I launch "admin" page
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
Then I should see element containing "Global Dell Outlet" text
And In "admin" page, I click "Dashboard"
And In "admin" page, I click "Monitors"
And I wait for "2" seconds
And In "admin" page, I click "Live_Tab"
And I wait for "2" seconds
And In "admin" page, I click "Product_Checkbox"
And In "admin" page, I click "Delete_Button"