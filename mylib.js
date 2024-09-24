
const fs = require('fs');
const path = require('path');

function CreateBody(callback) {
    const filePath = path.join(__dirname, 'index.html'); 

    // Чтение файла
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(`Ошибка при чтении файла: ${err.message}`);
        } else {
            callback(data);
        }
    });
}

module.exports = { CreateBody };
