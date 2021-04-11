const fs = require('fs');
const color = require("colors");

let listarTabla = (base,limite)=>{

    console.log("===============".green);
    console.log(`tabla de ${base}`.green);
    console.log("===============".green);

    return new Promise((resolve,reject)=>{
        if(!Number(base) || !Number(limite)){
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1;i<=limite;i++){
            data +=`${base}*${i} = ${base*i}\n`;
        }
        resolve(data)
    });
}

let crearArchivo = (base,limite)=>{

    console.log("===============".green);
    console.log(`tabla de ${base}`.green);
    console.log("===============".green);

    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('No es un número');
            return;
        }

        let data = '';
        for (let i = 1;i<=limite;i++){
            data +=`${base}*${i} = ${base*i}\n`;
        }
        fs.writeFile(`././tablas/tabla-${base}.txt`, data, 'utf8', (err)=>{
            if(err)  reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {crearArchivo,listarTabla};



