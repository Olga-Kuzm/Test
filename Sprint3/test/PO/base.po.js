class Base {

    get logReg (){
        return $('#customer_menu_top > li > a')
    }
    get home(){
        return $('[href="https://automationteststore.com/"]')
    }
    get apparelAccessories (){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]')
    }
    get makeUp(){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]')
    }
    get skinCare (){
        return $ ('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]')
    }
    get fragrance (){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]')
    }
    get men(){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]')
    }
    get hair (){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]')
    }
    get books (){
        return $('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]')
    }

    
}


module.exports = { Base : new Base() }