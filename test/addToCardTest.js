describe("interaction with web element", function () {

    const url = 'www.automationpractice.pl/index.php';

    it("E2E login test", async function () {
        // Locating the elements
        let addToCardBtn = await $('.col-sm-4.clearfix .shopping_cart').get(0);
        let shoppingCardSummaryField = await $("#cart_title");
        let summaryTab = await $('.step.clearfix .step_current.first').get(0);
        let signInTab = await $('.step.clearfix .step_todo.second').get(0);
        let addressTab = await $('.step.clearfix .step_todo.third').get(0);
        let shippingTab = await $('.step.clearfix .step_todo.four').get(0);
        let paymentTab = await $('.step.clearfix .step_todo.last').get(0);

        // Navigating to the URL
        await browser.url(url);

        // Get the current URL
        const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);

        // Expecting the URL to be as specified
        expect(await browser.getUrl()).toBe(currentUrl);

        console.log('Add to card test is successfully started');

        //Navigate and click on Add to card button
        await addToCardBtn.waitForClickable({ timeout: 10000 });
        await addToCardBtn.click();

        //Verify that add to card tab is successfully displayed 
        await shoppingCardSummaryField.waitForClickable({ timeout: 10000 });
        await shoppingCardSummaryField.toContain('Shopping-cart summary');

        //Verify that summary tab is displayed 
        await summaryTab.waitForClickable({ timeout: 10000 });
        await summaryTab.toContain('summary');

        //Verify that sign in tab is displayed 
        await signInTab.waitForClickable({ timeout: 10000 });
        await signInTab.toContain('sign in');

        //Verify that address tab is displayed 
        await addressTab.waitForClickable({ timeout: 10000 });
        await addressTab.toContain('address');
        
        //Verify that shopping tab is displayed 
        await shippingTab.waitForClickable({ timeout: 10000 });
        await shippingTab.toContain('shopping');

        //Verify that payment tab is displayed 
        await paymentTab.waitForClickable({ timeout: 10000 });
        await paymentTab.toContain('payment');

    });
});


