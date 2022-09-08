class Cart {
    get itemName(){
        return $('.align_left > a')
    }
    get sizeName(){
        return $('.align_left small')
    }
    get cartQuantity (){
        return $("input[id*='cart_quantity']")
    }
    get cartUpdateButton (){
        return $('#cart_update')
    }
    get shoppingCart(){
        return $('.contentpanel')
    }    
}



module.exports = {Cart: new Cart}