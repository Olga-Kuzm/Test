const { Login } = require("../pageobjects/login.po");
const { Base } = require('../pageobjects/base.po')

describe('Login positive', ()=>{    
    it('should log in', async ()=>{    
        await Base.logReg.click()
        await Login.login({username: 'loginname', password: 'password'})
        expect (await browser.getTitle()).toBe('My Account');        
    })
})