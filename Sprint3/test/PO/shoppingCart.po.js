class Cart {
    get itemName(){
        return $('.align_left > a')
    }
    get sizeName(){
        return $('.align_left small')
    }
    get cartQuantity (){
        return $('input#cart_quantity117c392653d989af6c2fb05fa89d0ad4da9')
    }
    get cartUpdateButton (){
        return $('#cart_update')
    }
    get shoppingCart(){
        return $('.contentpanel')
    }
    
}



module.exports = {Cart: new Cart}