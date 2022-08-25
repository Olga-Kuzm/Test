const { Login } = require('../PO/login.po')
const { Base } = require('../PO/base.po')

describe('Login with invalid credentials', ()=>{
    before('Open the page', async()=>{
        await browser.maximizeWindow();
        await browser.url('https://automationteststore.com/')
    })
    it ('should not login with invalid credentials', async()=>{
        await Base.logReg.click();
        await Login.login({username: 'invalidloginname', password: 'password'});
        await expect (Login.alertMsg).toBeDisplayed();
        await expect (Login.alertMsg).toHaveTextContaining('Error: Incorrect login or password provided.')

    })
})