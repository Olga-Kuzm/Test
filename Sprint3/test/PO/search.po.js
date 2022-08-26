class Search {
    get searchBar(){
        return $('#filter_keyword')
    }
    get allCategories(){
        return $('#category_0')
    }
    get apparelCat (){
        return $('#category_68')
    }
    get makeupCat(){
        return $('#category_36')
    }
    get skincareCat(){
        return $('#category_43')
    }
    get fragranceCat(){
        return $('#category_49')
    }
    get MenCat(){
        return $('#category_58')
    }
    get HairCareCat(){
        return $('#category_52')
    }
    get booksCat(){
        return $('#category_65')
    }

    get searchButton(){
        return $('.button-in-search')
    }
    get searchResult(){
        return $$('.fixed_wrapper')
    }
    async getSearchList(){
        const arr = await this.searchResult.map(async (elem) => {
                return await elem.getText()
            })
        return arr

    }

    async searchInCategory(category, text){
        await this.searchBar.click();
        await category.click();
        await this.searchBar.setValue('lip')
        await this.searchButton.click()
    }

    
}

module.exports = {Search: new Search}