const { Search } = require('../PO/search.po')

describe('Search in a category', ()=>{    
    context('Searching items', ()=>{
        it('should find items', async()=>{            
            await Search.searchInCategory(await Search.makeupCat, 'lip')           
            const arr = await Search.getSearchList()
            expect (arr).toEqual(['LE ROUGE ABSOLU RESHAPING & REPLENISHING LIPCOLOUR SPF 15', 'VIVA GLAM LIPSTICK'])
        })
    })
})