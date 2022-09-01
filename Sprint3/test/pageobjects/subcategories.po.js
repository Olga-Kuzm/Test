class Sub {
    get shoes(){        
        return $('//*[contains(text(), "Shoes")]')
    }
    get tSorts (){
        return  $('//*[contains(text(), "T-shirts")]')
    }

   
}

module.exports = { Sub : new Sub}