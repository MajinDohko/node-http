//Se importa el módulo y lo que se requiere para que funcione el servidor http
const http = require('node:http');
const web = require('./data');

//Creamos el servidor con el .createServer
const server = http.createServer((req, res)=>{
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });//200 quiere decir que está todo bien con el requerimiento
    //Escribimos el html dentro de una constante
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${web.title}</title>
    </head>
    <body>
      <header>
        <h1>${web.title}</h1>
        <h2>${web.subtitle}</h2>
      </header>
      <main>
        <p>${web.description}</p>
      </main>
    </body>
    </html>
  `;
  res.end(html)
})

server.listen(0, host, ()=>{
    console.log(`server listening on http://localhost:${server.address().port}`);
})

