class Base {

    get logReg (){
        return $('#customer_menu_top > li > a')
    }

    get categoryMenu(){
        return ('//nav/ul/*')
    }

    async clickOnMenuWithText (text){
        await $$(this.categoryMenu).map( async elem=>{
            if( await elem.getText()==='  '+text){
                 await elem.click()
            }     
        })
    }

    async moveOnMenuWithText (text){
        await $$(this.categoryMenu).map( async elem=>{
            if( await elem.getText()==='  '+text){
                 await elem.moveTo()
            } 
        })
    }
    
}


module.exports = { Base : new Base() }