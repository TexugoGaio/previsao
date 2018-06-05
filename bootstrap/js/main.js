let urlFoto;
let headPrevisao;
function mostraDiv(id, div) {
    var div1;
    var div2;

    div1 = document.getElementById(id).style.display;
    div2 = document.getElementById(div).style.display;

    if (div2 == "none" || div2 == "") {
        document.getElementById(div).style.display = "block";
    }

    document.getElementById(id).style.display = "none";
    return false;
}



function mandarCidade() {
    var cidade;
    cidade = document.getElementById("inputCidade").value;

    var url;
    url = 'http://servicos.cptec.inpe.br/XML/listaCidades?city=' + cidade

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            console.log(request.responseXML);
            var docXML = request.responseXML;
            var i = 0;
            const tam = docXML.getElementsByTagName('cidade').length;

            while (i < tam) {
                //cidade
                let nome = docXML.childNodes[0].childNodes[i].childNodes[0].innerHTML;
                console.log(nome);
                //uf
                let uf = docXML.childNodes[0].childNodes[i].childNodes[1].innerHTML;
                console.log(uf);
                //codigo da cidade
                let id = docXML.childNodes[0].childNodes[i].childNodes[2].innerHTML
                console.log(id);

                $('#selectCidade').append($('<option>', {
                    value: id,
                    text: nome + " - " + uf
                }));
                i++;
            }

            document.getElementById('form1').style.display = "none";
            document.getElementById('form2').style.display = "block";
            console.log(tam);
        } else {
            console.log("deu pau");
        }
    };

    request.open('GET', url, true);
    request.send();
}

function descobrirTempo(tempo){
    if(tempo == "pn" || tempo == "e" || tempo == "n" || tempo == "vn"){
        t = "Nublado";
        urlFoto = "/previsao/imagens/nublado.icon.png";
        headPrevisao = "Provavelmente estará nublado";

    } else if(tempo == "ps" || tempo == "cl" || tempo == "nd"){
        t = "Ensolarado";
        urlFoto = "/previsao/imagens/sol.icon.png";
        headPrevisao = "Probabilidade de sol";

    }else if(tempo == "ne"){
        t = "Neve";
        urlFoto = "/previsao/imagens/neve.icon.png";
        headPrevisao = "Probabilidade de neve";
        
    }else{
        t = "Chuva";
        urlFoto = "/previsao/imagens/chuva.icon.png";
        headPrevisao = "Probabilidade de chuva";
    }

    return t;
}

function mandarRequisicao() {
    let idCidade = document.getElementById("selectCidade").value;
    let categoria = document.getElementById("selectCategoria").value;
    console.log(idCidade);

    const url4 = "http://servicos.cptec.inpe.br/XML/cidade/" + idCidade + "/previsao.xml";
    const url7 = "http://servicos.cptec.inpe.br/XML/cidade/7dias/" + idCidade + "/previsao.xml";
    const url14 = "http://servicos.cptec.inpe.br/XML/cidade/" + idCidade + "/estendida.xml";

    if (categoria == 4) {
        //***PREVISÃO PARA 4 DIAS
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                let docXML = request.responseXML;
                let i = 3;
                const tam = 7;

                while(i < tam){
                    let cidade = docXML.childNodes[0].childNodes[0].childNodes[0].innerHTML;
                    let estado = docXML.childNodes[0].childNodes[1].childNodes[0].innerHTML;
                    let dia = docXML.childNodes[0].childNodes[i].childNodes[0].innerHTML;
                    let tempo = docXML.childNodes[0].childNodes[i].childNodes[1].innerHTML;
                    let max = docXML.childNodes[0].childNodes[i].childNodes[2].innerHTML;
                    let min = docXML.childNodes[0].childNodes[i].childNodes[3].innerHTML;
                    let x = i-2;
                    let t = descobrirTempo(tempo);

                    $('#tabPrevisao ul').append("<li><a data-toggle='tab' href='#menu'" + x + ">" + dia + "</a></li>");
                    $('#tabConteudo').append(
                        $('<div>',{
                            id:"menu" + x,
                            class:"tab-pane fade"}).append(
                                $('<h3>')))
                    $('#tabConteudo').append(
                    "<div id='menu'"+ x +" class='tab-pane fade'>" +
                        "<div class='col-sm-1'></div>" +
                        "<div class='col-sm-8'>" +
                            "<div class='media' style='margin-top:80px;'>" + 
                                "<div class='media-left media-top'>" + 
                                    "<img id='fotoPrevisao' class='media-object' src='"+ urlFoto +"'>" +
                                "</div>" +
                                "<div class='media-body'>" +
                                    "<h1 style='margin-top:20px; margin-left:50px;' class='media-heading' id='headPrevisao'>" + t + "</h1>" +
                                    "<h2 style='margin-top:20px; margin-left:50px;' id='cidade' class='media-heading'>" + cidade + " - " + estado + "</h2>" +
                                "</div>" +
                                "<h3 style='margin-top:50px;' id='max' class='media-heading'>" + max + "</h3>" +
                                "<h3 style='margin-top:10px;' id='min' class='media-heading' >" + min + "</h3>" +
                            "</div>"+
                        "</div>" +
                        "<div class='col-sm-3'></div>" +
                    "</div>");

                    i++;
                }
            }

        };
        request.open('GET', url4, true);
        request.send();

        //******************************************* */
    } else if (categoria == 7) {
        //PREVISÃO PARA 7 DIAS
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                let docXML = request.responseXML;
            }

        };
        request.open('GET', url7, true);
        request.send();

        //******************************************* */
    } else if (categoria == 14) {
        //PREVISÃO PARA 14 DIAS
        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                let docXML = request.responseXML;
            }

        };
        request.open('GET', url14, true);
        request.send();

        //******************************************* */
    }


}