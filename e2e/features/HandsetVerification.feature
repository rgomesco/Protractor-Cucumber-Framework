Feature: Mobile Handset

   covering different scenarios

@Test1
Scenario: Navigation
Given I navigate to snapdeal homepage
When In "Home" page, I hover the mouse over "Mobile_Mega_Menu"
And In "Home" page, The Title should be "TD_home_HomeElements_Title"
Then In "Home" page, I click "Smartphones"
