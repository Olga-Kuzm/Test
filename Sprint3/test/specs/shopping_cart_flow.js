const { Login } = require('../PO/login.po');
const { Base } = require('../PO/base.po')
const { Sub } = require('../PO/subcategories.po')
const { Shoes } = require('../PO/items/shoes.po')
const { Ruby } = require('../PO/rubyShoe.po')
const { Cart } = require('../PO/shoppingCart.po')


describe('Shopping cart flow', ()=>{    
    context('Adding goods', ()=>{
        it('should login', async()=>{
            await Base.logReg.click()
            await Login.login({username: "loginname", password: "password"})

        })
        it ('should add goods to cart', async()=>{
            await Base.apparelAccessories.moveTo();            
            await Sub.shoes.click();
            await Shoes.item3.click()
            await Ruby.chooseItem(Ruby.sizeValue_6White);            
            expect(await Cart.itemName.getText()).toBe('Ruby Shoo Womens Jada T-Bar')            
            expect(await Cart.sizeName.getText()).toBe('Color&Size UK 6 / White')
        })
    })
    context('Deleting goods', function(){
        it('should delete goods from cart', async function(){
            await Cart.cartQuantity.setValue('0')
            await Cart.cartUpdateButton.click();
            expect (await Cart.shoppingCart.getText()).toBe('Your shopping cart is empty!\nContinue')
        })

    })
})