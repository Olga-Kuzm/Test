class Sub {
    get shoes(){
        return $('#categorymenu > nav > ul > li:nth-child(2) > div > ul:nth-child(1) > li:nth-child(1) > a')
    }
    get tSorts (){
        return $('#categorymenu > nav > ul > li.current > div > ul:nth-child(1) > li:nth-child(2) > a')
    }

   
}

module.exports = { Sub : new Sub}