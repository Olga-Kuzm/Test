const { Login } = require('../PO/login.po');
const { Base } = require('../PO/base.po')
const { Sub } = require('../PO/subcategories.po')
const { Shoes } = require('../PO/items/shoes.po')


describe('Shopping cart flow', ()=>{
    before('open the page and login', async ()=>{
        await browser.maximizeWindow();
        await browser.url('https://automationteststore.com/');
        await Base.logReg.click()
        await Login.login({username: "loginname", password: "password"})

    })
    context('Adding goods', ()=>{
        it ('should add goods8 to cart', async()=>{
            await Base.apparelAccessories.moveTo();            
            await Sub.shoes.click();
            await Shoes.item3.click()
            await browser.pause()

            




        })
    })
})