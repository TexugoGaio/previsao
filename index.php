<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>MeuClima</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="bootstrap/css/style.css" rel="stylesheet" type="text/css"/>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="bootstrap/js/main.js"></script>

    </head>

    <body>

        

        <nav class="navbar navbar-inverse navbar-fixed-top" style="padding-bottom: 10px;" >
            <div id="header" class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" style="margin-top:10px" href="#">MeuClima</a>
                </div>
                <ul class="nav navbar-nav" >
                </ul>
                
            </div>
        </nav>

        <div id="corpo" class="container-fluid">
            <div id="jumbo1" class="jumbotron" style="margin-top:200px">
                <h1 align="center">MeuClima</h1>       
                <p align="center">Tenha informações sobre o clima da sua região de forma simples e rápida. Clique em <strong>Começar</strong>
                para avançar para a próxima etapa.</p>
                <button class="btn-primary btn-lg center-block btn-huge" onclick="mostraDiv('jumbo1','jumbo2')">COMEÇAR</button>
            </div>

            <div id="jumbo2" class="jumbotron" style="margin-top:200px; display:none;">
                <form action="" method="get" onsubmit="mandarRequisicao()">
                    <div class="form-group">
                        <label for="cidade">Cidade:</label>
                        <input type="text" class="form-control" id="cidade" placeholder="Digite sua cidade" name="cidade">
                    </div>
                </form>
            </div>
        </div>

        

    </body>
</html>