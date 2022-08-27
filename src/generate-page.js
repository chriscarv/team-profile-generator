const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        if(err){
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};

module.exports = writeFile;