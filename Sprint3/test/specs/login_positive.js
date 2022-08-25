const { Login } = require("../PO/login.po");
const { Base } = require('../PO/base.po')

describe('Login positive', ()=>{
    before('Open the page', async()=>{
        await browser.maximizeWindow()
        await browser.url('https://automationteststore.com/')

    })
    it('should log in', async ()=>{    
        await Base.logReg.click()
        await Login.login({username: 'loginname', password: 'password'})
        expect (await browser.getTitle()).toBe('My Account');
        
    })
})