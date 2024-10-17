describe("interaction with web element", function () {

    const url = 'www.automationpractice.pl/index.php';

    it("E2E login test", async function () {
        // Locating the elements
        let searchField = await $("#searchbox");
        let searchBtn = await $('.col-sm-4 .btn.btn-default.button-search').get(0);
        let searchNameElement = await $('.row .center_column.col-xs-12.col-sm-9 .page-heading .lighter').get(0)
        let firstProductName = await $('.product_list.grid.row .ajax_block_product .product-container .right-block .name .product-name').get(0)
        let secondProductName = await $('.product_list.grid.row .ajax_block_product .product-container .right-block .name .product-name').get(1)
        let productName = "Dress"

        // Navigating to the URL
        await browser.url(url);

        // Get the current URL
        const currentUrl = await browser.getUrl();
        console.log('Current URL:', currentUrl);

        // Expecting the URL to be as specified
        expect(await browser.getUrl()).toBe(currentUrl);

        console.log('Search field test is successfully started');

        //Enter a search field value
        await searchField.waitForClickable({ timeout: 10000 });
        await searchField.setValue(productName);

        //Click on search button
        await searchBtn.waitForClickable({ timeout: 10000 });
        await searchBtn.click();
        console.log('Search button is successfully clicked');

        //Verify that search name element is successfully  displayed 
        await searchNameElement.waitForClickable({ timeout: 10000 });
        await searchNameElement.toContain('DRESS');

        //Verify that first listed element have dress on the element name
        await firstProductName.waitForClickable({ timeout: 10000 });
        await firstProductName.toContain('dress');

        //Verify that second listed element have dress on the element name
        await secondProductName.waitForClickable({ timeout: 10000 });
        await secondProductName.toContain('dress');


    });
});


