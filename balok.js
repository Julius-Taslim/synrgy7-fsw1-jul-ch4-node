const luasBalok = (panjang, lebar, tinggi) =>{
    console.log(2*((lebar*tinggi) + (panjang*tinggi) + (lebar*panjang)))
}

const volumeBalok = (panjang, lebar, tinggi) => {
    return panjang*lebar*tinggi
}

module.exports ={luasBalok, volumeBalok}