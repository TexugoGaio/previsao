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

                $('select').append($('<option>', {
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

            }

        };
        request.open('GET', url14, true);
        request.send();

        //******************************************* */
    }


}