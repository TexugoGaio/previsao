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
                    <a class="navbar-brand" style="margin-top:10px" href="index.php">MeuClima</a>
                </div>
                <ul class="nav navbar-nav" >
                </ul>
                
            </div>
        </nav>

        <div id="corpo" class="container-fluid">

            <div id="jumbo1" class="jumbotron" style="margin-top:150px; height:400px;">
                <h1 align="center">MeuClima</h1>       
                <p align="center">Tenha informações sobre o clima da sua região de forma simples e rápida. Clique em <strong>Começar</strong>
                para avançar para a próxima etapa.</p>
                <button class="btn-primary btn-lg center-block btn-huge" onclick="mostraDiv('jumbo1','jumbo2')">COMEÇAR</button>
            </div>

            <div id="jumbo2" class="jumbotron" style="margin-top:150px; height:400px; display:none;">
                

                <div id="form1" class="form-group">
                    <p id="p1">Primeiro, insira o nome da sua cidade ou parte dele.</p>
                    <label for="cidade">Cidade:</label>
                    <input type="text" require class="form-control" id="inputCidade" placeholder="Digite sua cidade" name="inputCidade">
                    <button style="margin-top:150px;" type="submit" onclick="mandarCidade()" class="btn btn-primary btn-lg" style="margin-top:30px;" >Enviar</button>
                </div>
                    
                <div id="form2" class="form-group" style="display:none">
                    <p id="p1">Depois, selecione corretamente sua cidade, e a categoria de previsão do tempo.</p>
                    <label for="cidades">Selecione a cidade:</label>
                    <select name="selectCidade" id="selectCidade" class="form-control">   
                    </select>
                    <label style="margin-top:10px;" for="categoria">Selecione a categoria:</label>
                    <select name="selectCategoria" id="selectCategoria" class="form-control">
                        <option value="4">4 dias</option>
                        <option value="7">7 dias</option>
                    </select>
                    <button style="margin-top:81px;" type="submit" onclick="mandarRequisicao()" class="btn btn-primary btn-lg" style="margin-top:30px;" >Enviar</button>
                </div>

                <div id="tabPrevisao" class="container">
                    <ul class="nav nav-tabs">
                        
                    </ul>

                    <div id="tabConteudo" class="tab-content">
                            
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>