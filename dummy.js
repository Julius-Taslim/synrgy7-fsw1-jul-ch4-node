//membuat costum module

const printData =()=>{
    console.log('value')
}
const printDataCustom =(value)=>{
    console.log(value)
}

//export module.
//module.exports = printData

module.exports = {printData, printDataCustom}