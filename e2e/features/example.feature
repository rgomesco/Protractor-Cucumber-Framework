Feature: Scenarios for edit and delete Contact Information in profile screen


@run
Scenario: Navigation
# hardcoded steps. Need to change based on navigation flow.
Given I launch
And In "profile" page, I set the "Search_Box" text box to "troytrd"
And In "profile" page, I set the "Search_Box" text box to "TD_example_search_searchTerm"
And In "profile" page, I set the "Search_Box" text box to "XL_Sheet1_searchTerm4"
And In "profile" page, I click "Search_Button"
# And In "profile" page, I click "Images"