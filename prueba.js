const fs = require('fs')
const path = require('path')

const trayectoria = fs.readdir('./data/Trayectoria', (error, data)=>{
    if(error){
        onerror(error);
        return;
    }
const taxi = data.map((e)=>{const file= path.join('./data/Trayectoria', e)

console.log(2, e)
// let read =''
let read = fs.readFile(file, (error, data)=>{
         if (error) console.log(error)
         else {console.log(data.toString().split('\r'))
            return data.toString()}
         
         
    
     })
     console.log(5, read)
})

});
console.log(1, trayectoria)


// console.log(3, taxi)
// fs.readFile('./data/Trayectoria/9557.txt', (error, data)=>{
//     if (error) console.log(error)
//     else console.log(data.toString())

// })