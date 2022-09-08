class Ruby {
    get sizeOption(){
        return '//*[@id="option346"]/*'
    }
    get shoeQuantity(){
        return $('#product_quantity')
    }
    get addToCartButton (){
        return $('.cart')
    }
    async chooseOption(size){
        await $$(this.sizeOption).map( async elem=>{
            if( await elem.getText()===size){
                 await elem.click()
            }     
        })        
        await this.addToCartButton.click();
    }
}



module.exports = { Ruby : new Ruby}