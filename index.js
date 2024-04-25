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

luasKubus(5);
volumeKubus(5);
luasPrisma(6,8,20,26);
volumePrisma(25,20);

console.log()

const os = require('os')
const fs = require('fs')

console.log(os.memory)

const data = fs.readFileSync('./fs.txt','utf-8') //Sync, hanya menggunakan 2 parameter
fs.writeFileSync('./fs.txt', 'Ganti menjadi Text Baru!', 'utf-8')
console.log(data)

//Cari 1 hasil dari volume balok yang kemudian dimasukkan kedalam result.txt
const result = volumeBalok(20,5,10);
console.log(result);
fs.writeFileSync('./result.txt',`Volume Balok : ${result}`, 'utf-8')
//Jika Sync hanya bisa satu satu function selesai dulu, baru lanjut. Async bisa banyak menjalankan function Asyns dan code setelahnya.

//contoh Async

fs.writeFile('./result.txt',`Volume Balok : ${result}`, 'utf-8', () =>{
    //Callback apabila ini sudah selesai, eksekusi apa
});
//parameter pada callback adalah error dan success

fs.writeFile('./result.txt',`Volume Balok : ${result}`, 'utf-8', (err) =>{
    if (err){
        console.log('Error saving data');
    }
});

fs.readFile('./result.txt', 'utf-8', (err, data) =>{
console.log(data);
});

//Dalam menggunakan perintah Write dan Read, keduanya harus berjenis sama (Async dengan Async atau Sync dan Sync) agar tidak bertabrakan.
//Await dapat digunakan solusi pada async.
//Harus menggunakan tipe data String, gunakan fungsi build in toString atau literal)
//Conv Object to String menggunakan JSON.stringify(object)
//Gunakan JSON.parse untuk mengubah string ke Object kembali

const person ={
    'name':'Julius',
    'age':18
}
fs.writeFile('./fs.txt',JSON.stringify(person), 'utf-8',(err) =>{
    if (err)
    console.log("Data tidak dapat diwrite")
})

fs.readFile('./fs.txt','utf-8', (err,data)=>{
    console.log(JSON.parse(data)) //nice!
})

//Latihan 3 - Write and Read.

const {peopleWrite, peopleRead} = require('./people')

peopleWrite();
peopleRead();