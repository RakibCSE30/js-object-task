const moreArray=[
    {
        name:'Laptop',price:3200, brand:'Lanovo',color: 'Black'
    },
    {
        name:'Mobile',price:200, brand:'Oppo',color: 'Offwhite'
    },
    {
        name:'Tablet',price:21200, brand:'Realme',color: 'Ash'
    },
    {
        name:'PC',price:3200, brand:'Dell',color: 'Brown'
    },
    {
        name:'BYke',price:3023200, brand:'Palser',color: 'Black'
    }
];
console.log(moreArray);
// map can return value as array

const brand = moreArray.map(product=>product.color);
console.log(brand);
// forEach loop does not return any item

moreArray.forEach(product=> console.log(product.name));

// filter return an array likely same as map

const fil= moreArray.filter(product=>product.price>=50000);
console.log(fil);
// .............Difference between filter and find................ .
// filter can return all vlaue if the condition is full fill 
// But in the find can retuen at first value of the array or obj

const special = moreArray.find(p=>p.name.includes('L'));
console.log(special);
