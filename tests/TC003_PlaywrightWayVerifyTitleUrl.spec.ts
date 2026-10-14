import{test,expect} from "@playwright/test";

//Assert Title
test("Assert title and url of the page" , async({page})=>{

    //open page
    await page.goto("https://sauce-demo.myshopify.com/");
    let appUrl : string = page.url();

    //assert full url baseic
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/");
    console.log("Url matched...." ,appUrl);

    //asert partial url
    await expect(page).toHaveURL(/sauce-demo/);
    console.log("Partial Url matched...." ,appUrl);


    //get title
    let title: string = await page.title();

    //assert title
    await expect(page).toHaveTitle("Sauce Demo");
    console.log("Title matched...." ,title);

    //variable level asseration
    expect(title).toContain("Sauce");
    console.log("Title matched with variable level assertion...." ,title);
})