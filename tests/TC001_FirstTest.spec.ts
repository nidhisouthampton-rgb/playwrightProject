//add test runner
import{test} from "@playwright/test";

//open application

test("Launch first sauceDemo application" ,async({page}) =>{

    await page.goto("https://sauce-demo.myshopify.com/");

    //Get the Title of current page 
const title = await page.title();
console.log("Application title of the page :" ,title);
})