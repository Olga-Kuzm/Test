class Ruby {
    get sizeOption(){
        return $('#option346')
    }
    get shoeQuantity(){
        return $('#product_quantity')
    }
    get addToCartButton (){
        return $('.cart')
    }
    get sizeValue3White(){
        return $('option[value="755"]')
    }
    get sizeValue_3_5White(){
        return $('option[value="756"]')
    }
    get sizeValue_4White(){
        return $('option[value="757"]')
    }
    get sizeValue_6White(){
        return $('option[value="758"]')
    }
    get sizeValue_3Red(){
        return $('option[value="759"]')
    }
    get sizeValue_5Red(){
        return $('option[value="760"]')
    }
    get sizeValue_7Red(){
        return $('option[value="761"]')
    }
    get sizeValue_5_5Blue(){
        return $('option[value="762"]')
    }

    async chooseItem(size){
        await size.click();
        await this.addToCartButton.click()

    }





}



module.exports = { Ruby : new Ruby}