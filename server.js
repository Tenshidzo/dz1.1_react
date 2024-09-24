// server.js
const http = require('http');
const { CreateBody } = require('./mylib');

// Создаем сервер, который прослушивает порт 3212
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Используем функцию CreateBody для получения содержимого файла
        CreateBody((htmlContent) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlContent);
        });
    } else {
        // Обрабатываем несуществующие маршруты
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Сервер будет слушать порт 3212
server.listen(3212, () => {
    console.log('Сервер запущен на http://localhost:3212');
});
