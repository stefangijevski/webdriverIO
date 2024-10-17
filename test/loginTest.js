describe("interaction with web element", function () {

    const url = 'www.automationpractice.pl/index.php';

    it("E2E login test", async function () {
        // Locating the elements
        let loginBtn = await $('.nav .container .row .header_user_info .login').get(0);
        let emailField = await $('.col-xs-12.col-sm-6 .box .form_content .form-group .is_required.validate').get(1);
        let passwordField = await $('.col-xs-12.col-sm-6 .box .form_content .form-group .is_required.validate').get(2);
        let signInBtb = await $("#SubmitLogin");
        let useNameField = await $('.nav .container .row .header_user_info .account').get(0);
        let userName = "stefan_gijevski@yahoo.com";
        let password = "test1"

        // Navigating to the URL
        await browser.url(url);

        // Get the current URL
        const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);

        // Expecting the URL to be as specified
        expect(await browser.getUrl()).toBe(currentUrl);

        console.log('Login test is successfully started');

        //Navigate to Login page
        await loginBtn.waitForClickable({ timeout: 10000 });
        await loginBtn.click();

        //Enter email
        await emailField.waitForClickable({ timeout: 10000 });
        await emailField.setValue(userName);
        //Enter a password
        await passwordField.waitForClickable({ timeout: 10000 });
        await passwordField.setValue(password);
        //Click on Sign in Button
        await signInBtb.waitForClickable({ timeout: 10000 });
        await signInBtb.click();
        console.log('Sign in button is successfully clicked');

        //Verify that user is successfully login
        await useNameField.waitForClickable({ timeout: 10000 });
        await useNameField.toContain('Stefan Gijevski');


    });
});


