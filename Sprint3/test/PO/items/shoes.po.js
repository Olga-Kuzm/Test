class Shoes{
    get item1 (){
        return $('[title="New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals"]')
    }
    get item2(){
        return $('[title="Womens high heel point toe stiletto sandals ankle strap court shoes"]')
    }
    get item3(){
        return $('[title="Ruby Shoo Womens Jada T-Bar"]')
        
    }
    get item4(){
        return $('[title="Fiorella Purple Peep Toes"]')
    }

    
}

module.exports = { Shoes: new Shoes}