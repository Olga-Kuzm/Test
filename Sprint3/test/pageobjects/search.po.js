class Search {
    get searchBar(){
        return $('#filter_keyword')
    }
    
    get searchCategories(){
        return '.search-category'
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
        await $$(this.searchCategories).map(async elem=>{
         if(await elem.getText()===category){
            await elem.click()
         }
    })
        await this.searchBar.setValue(text);
        await this.searchButton.click()
}

    
}

module.exports = {Search: new Search}