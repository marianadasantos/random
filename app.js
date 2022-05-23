const http = require('http');

const fs = require('fs');

const path = require('path');



console.log('VAMOOOOOOO');

http.createServer(function (req,res) {
    res.write(`
        <head>
            <title>Bloguinho</title>
            <meta charset="utf-8">
        </head>
        <body>
            <div class="container"> 
                <header> 
                    <h1> Bloguinho </h1>
                </header>
                <section>
                    <div class="post">
                        <h3> PREVISÃO DO TEMPO </h3>
                        <p>As temperaturas devem despencar no Sul de Minas a partir da madrugada
                        desta quarta-feira (18), pelo menos até sábado. Em algumas cidades da 
                        região, há previsão de temperaturas negativas. O Inmet, Instituto Nacional 
                        de Meteorologia, também emitiu alerta de geada válido para a madrugada
                        desta quarta. </p>
                        <blockquote> Segundo dados do Centro de Previsão do Tempo e Estudos Clmiáticos do INPE, o Instituto Nacional de Pesquisas Espaciais, Maria da Fé e São Tomé das Letras deverão registrar as menores temperaturas da região nesta quarta-feira: -2ºC. </blockquote>
                    </div>
                </section>
                <footer> 18 de Maio de 2022.</footer>
            </div>
        </body> `
    );
    if(req.url=='/10'){
        res.write('<strong>VOCÊ DIGITOU 10 NA REQUISIÇÃO')
    }

    fs.readFile(
        path.join(___dirname, 'public', )
    )
    res.end();
}).listen(9600);