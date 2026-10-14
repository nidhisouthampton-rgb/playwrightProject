import{test} from "@playwright/test";

test("Verify the title and URL of the application", async({page}) =>{

     await page.goto("https://sauce-demo.myshopify.com/")
     const url = page.url();

    if(url === "https://sauce-demo.myshopify.com/"){

        console.log(" The application URL is correct & test passed :" ,url);
    }else{
        console.log(" The application URL is incorrect & test failed :" ,url);
        
    }

    const title =await page.title();
    if(title === "Sauce Demo"){
        
        console.log(" The application title is correct & test passed :" ,title);
    }
    
    else{
        console.log(" The application title is incorrect & test failed :" ,title);
    }

});