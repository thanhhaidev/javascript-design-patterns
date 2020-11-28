const gadgetFactory = require('./gadgetFactory');

const myLaptop = gadgetFactory.createGadget('Laptop', {
    ram: 8,
    hdd: 256,
    name: 'Thanh Hai Dev\'s Macbook Pro',
});

const myTablet = gadgetFactory.createGadget('Tablet', {
    ram: 4,
    hdd: 128,
    name: 'Thanh Hai Dev\'s iPad',
    network: '4G',
});

console.log(myLaptop);
console.log(myTablet);
