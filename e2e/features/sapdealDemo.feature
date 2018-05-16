Feature: Mobile Handset

@run
Scenario: Navigation
Given I navigate to snapdeal homepage
When In "home" page, I hover the mouse over "Mobile_Mega_Menu"
And I click on element containing text "Samsung"
And I click on element containing text "Samsung J7 NXT (16GB, Black)"
And I switch to window containing "Buy_Button" element in "home" page
And In "home" page, I click "Buy_Button"


