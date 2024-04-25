console.log('first')

//import satu function
//const dummyFn = require('./dummy')
// printData()
// printDataCustom('custom')

//import banyak function dari custom module.
const {printData, printDataCustom} = require ('./dummy')
const {luasBalok, volumeBalok} = require ('./balok')
const {luasKubus, volumeKubus} = require ('./kubus')
const {luasPrisma, volumePrisma} = require ('./prisma')

luasBalok(10,5,20);
volumeBalok(20,5,10);
luasKubus(5);
volumeKubus(5);
luasPrisma(6,8,20,26);
volumePrisma(25,20);