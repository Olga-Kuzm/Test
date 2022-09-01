const { Search } = require('../pageobjects/search.po')

describe('Search in a category', ()=>{  
    context('Searching items', ()=>{
        it('should find items', async()=>{            
            await Search.searchInCategory('Makeup', 'lip'); 
            const arr = await Search.getSearchList();
            expect (arr).toEqual(['LE ROUGE ABSOLU RESHAPING & REPLENISHING LIPCOLOUR SPF 15', 'VIVA GLAM LIPSTICK']);
        })
    })
})