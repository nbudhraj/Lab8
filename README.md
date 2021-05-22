# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   
   3 because it would not make sense to have a GitHub action that runs whenever code is pushed because sometimes code that is being pushed is testing code which will automatically fail the test. Manually run them locally before pushing code also does not make sense for automated tests. So, that leaves us with after the development process or answer choice number 3.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
    I would not use a unit test to test the "message" feature of a messaging application because unit tests cannot test how these individual components interact with each other on an application/feature level. Therefore, we would not be able to use a unit test to check whether a user sent a message to another user.


3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters 
   
    I would use a unit test for the max message length features because that is one individual part of the code that can easily be tested, as we would be comparing integers values.


4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true? 
   
    If we set headless to true, none of our UI will show up.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case? 
   
    await page.goto('http://127.0.0.1:5500');
    
    await page.click('img');


