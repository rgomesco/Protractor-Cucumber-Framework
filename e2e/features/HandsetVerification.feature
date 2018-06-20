Feature: Mobile Handset

covering different scenarios

  @Test1
  Scenario: Checking Colours for mobiles
    Given I navigate to amazon homepage
    When In "home" page, I hover the mouse over "Shopall"
    And The title of the page should be "TD_all_HomeData_Title"
    And In "home" page, I hover the mouse over "Mobiles_Computers"
    And In "home" page, I click "All_Mobiles_Link"
    And In "home" page, I click "Motorola_checkbox"
    And In "home" page, I click "Moto_E4_plus_product"
    And I switch to window containing "Buy_Button" element in "home" page
    Then The title of the page should be "TD_all_PDPData_Title"
    Then In "product" page, Title of the "Mobile_Option1_Swatch" should be "TD_all_PDPData_MobileGold"
    Then In "product" page, Title of the "Mobile_Option2_Swatch" should be "TD_all_PDPData_MobileGrey"

  @Test1
  Scenario: Checking Delivery items with valid pincode
    Given I navigate to amazon homepage
    When In "home" page, I click "pincode_header"
    And In "home" page, I set the "pincode" text box to "TD_all_PDPData_Pincode"
    And In "home" page, I click "apply_button"
    Then In "home" page, Text of the "pincode_message" should be "TD_all_HomeData_pincodeMessage"

# @Test1
# Scenario: Check Sorting of webpage
# Given I navigate to amazon homepage
#  When In "home" page, I hover the mouse over "Shopall"
#  And In "home" page, I hover the mouse over "Womens_Fashion"
#  And In "home" page, I click "Shoes_Link"
# # And In "list" page, I scroll the page till "Casual_Shoes_Banner"
#  #And In "list" page, I click "Casual_Shoes_Banner"
#  #And In "list" page, I click "Carlton_london_Checkbox"
#  #And In "list" page, I click "price_filter_1000_2500"
#  Then In "list" page, I set the "sort_filter" drop down to "Price: Low to High"
#  And I wait
#  Then In "list" page, The "price" should be sorted "Low_to_High"



# @Test1
# Scenario: Check rating
# Given I navigate to amazon homepage
# When In "home" page, I hover the mouse over "Shopall"
#  And In "home" page, I hover the mouse over "Mobiles_Computers"
#  And In "home" page, I click "Power_banks"
#  And I wait
# # And In "list" page, I click "StarsPlus4"
#  And In "list" page, Text of the "Stars" should startwith "4"

  @Test1
  Scenario: Check Colours
    Given I navigate to amazon homepage
    When In "home" page, I hover the mouse over "Shopall"
    And In "home" page, I hover the mouse over "Mobiles_Computers"
    And In "home" page, I click "All_Mobiles_Link"
    And In "list" page, I click "MI_checkbox"
    And In "list" page, I click "Redmi_Note5"
    And I switch to window containing "Buy_Button" element in "home" page
    Then In "product" page, Text of the "Describtion_color" should be "Black"


  @Test1
  Scenario: Check brands
    Given I navigate to amazon homepage
    When In "home" page, I hover the mouse over "Shopall"
    And In "home" page, I hover the mouse over "Mobiles_Computers"
    And In "home" page, I click "All_Mobiles_Link"
    And In "home" page, I click "Motorola_checkbox"
    Then In "list" page, The text should contain "Moto" or "Motorola"


# @Test1
# Scenario: Image comparison
# When In "home" page, I hover the mouse over "Shopall"
# And In "home" page, I hover the mouse over "Mobiles_Computers"
# And In "home" page, I click "All_Mobiles_Link"
# And In "list" page, I click "MI_checkbox"
# And In "list" page, I click "Redmi_Note5"
# And I switch to window containing "Buy_Button" element in "home" page
# Then In "product" page, I hover the mouse over "Product_image"
# Then In "product" page, I compare "Product_enlarged_image" with "camera.jpg"