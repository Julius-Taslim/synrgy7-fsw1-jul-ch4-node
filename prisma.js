//Prisma Segitiga

const luasPrisma =(alasSegitiga, tinggiSegitiga,tinggi, kelilingAlas)=>{
    console.log ((alasSegitiga*tinggiSegitiga)+(kelilingAlas*tinggi))
}

const volumePrisma =(luasAlas,tinggi)=>{
    console.log (luasAlas*tinggi)
}

module.exports = {luasPrisma, volumePrisma}