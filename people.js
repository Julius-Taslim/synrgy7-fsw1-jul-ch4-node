const people = [{
    'id': 1,
    'name': "Leanne Graham",
    'username': "Bret",
    'email': "Sincere@april.biz",
},
{
    'id': 2,
    'name': "Ervin Howell",
    'username': "Antonette",
    'email': "Shanna@melissa.tv",
},
{
    'id': 3,
    'name': "Clementine Bauch",
    'username': "Samantha",
    'email': "Nathan@yesenia.net",
},
{
    'id': 4,
    'name': "Patricia Lebsack",
    'username': "Karianne",
    'email': "Julianne.OConner@kory.org",
},
{
    'id': 5,
    'name': "Chelsey Dietrich",
    'username': "Kamren",
    'email': "Lucio_Hettinger@annie.ca",
},
{
    'id': 6,
    'name': "Mrs. Dennis Schulist",
    'username': "Leopoldo_Corkery",
    'email': "Karley_Dach@jasper.info",
},
{
    'id': 7,
    'name': "Kurtis Weissnat",
    'username': "Elwyn.Skiles",
    'email': "Telly.Hoeger@billy.biz",
},
{
    'id': 8,
    'name': "Nicholas Runolfsdottir V",
    'username': "Maxime_Nienow",
    'email': "Sherwood@rosamond.me",
},
{
    'id': 9,
    'name': "Glenna Reichert",
    'username': "Delphine",
    'email': "Chaim_McDermott@dana.io",
},
{
    'id': 10,
    'name': "Clementina DuBuque",
    'username': "Moriah.Stanton",
    'email': "Rey.Padberg@karina.biz",
}];

const fs = require('fs')
const peopleWrite = () => {
    fs.writeFile('./dummy.txt',JSON.stringify(people), 'utf-8',(err) =>{
        if (err) console.log('Error.')
    })
}
const peopleRead = () => {
    fs.readFile('./dummy.txt','utf-8',(err, data)=>{
        const readPeople = JSON.parse(data);
        const names = readPeople.map(readPeople => readPeople.name)
        console.log(names)
    })
}

const peopleDetail =(id) =>{
    fs.readFile('./dummy.txt','utf-8',(err, data)=>{
        const readPeople = JSON.parse(data);
        const filteredPeople = readPeople.find(readPeople => readPeople.id == id)
        console.log(filteredPeople)
    })
}
module.exports = { peopleWrite, peopleRead, peopleDetail }