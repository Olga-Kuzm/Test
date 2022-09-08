const { Login } = require('../pageobjects/login.po');
const { Base } = require('../pageobjects/base.po')
const { Sub } = require('../pageobjects/subcategories.po')
const { Shoes } = require('../pageobjects/items/shoes.po')
const { Ruby } = require('../pageobjects/rubyShoe.po')
const { Cart } = require('../pageobjects/shoppingCart.po')



describe('Shopping cart flow', ()=>{ 

    context('Adding goods', ()=>{
        it('should login', async()=>{
            await Base.logReg.click()
            await Login.login({username: "loginname", password: "password"})
        })
        it ('should add goods to cart', async()=>{
            await Base.moveOnMenuWithText('APPAREL & ACCESSORIES');
            await Sub.shoes.click();
            await Shoes.item3.click();            
            await Ruby.chooseOption('UK 6 / White');
            expect(await Cart.itemName.getText()).toBe('Ruby Shoo Womens Jada T-Bar');
            expect(await Cart.sizeName.getText()).toBe('Color&Size UK 6 / White')
        })
    })
    context('Deleting goods', function(){
        it('should delete goods from cart', async function(){
            await Cart.cartQuantity.setValue('0');
            await Cart.cartUpdateButton.click();
            expect (await Cart.shoppingCart.getText()).toBe('Your shopping cart is empty!\nContinue')
        })
    })
})