import {faker} from '@faker-js/faker';


function createRandomCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=252R&client=byo&paint=P0C6E&fabric=FMANL&sa=S01E6,S01MB,S02MA,S02VF,S0302,S0319,S0322,S03AG,S0403,S0430,S0431,S043A,S043W,S0459,S0493,S0494,S04GQ,S04UR,S0508,S0534,S0544,S05AS,S05DC,S0688,S06AC,S06AK,S06C4,S06CP,S06U2,S06WC,S0712,S0760,S0775&date=20240802&bkgnd=1&quality=70&resp=jpeg&angle=40',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList = faker.helpers.multiple(createRandomCarList, {
        count:7
})

export default{
    carList
}

