function recuperarSenha(cpf) {
    var instrucoes = {
        "cpf":cpf,
    };
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { // IE
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {
            }
        }
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            var resposta = xmlhttp.responseText;
            let res = JSON.parse(resposta);
            // console.log(res);
            document.getElementById('destino').innerHTML = '';
            if(res.email == null) {
                criarElement({
                    "id":false,
                    "textoHtml":"Não localizamos um e-mail vinculado a esse CPF. Entre em contato com nosso setor de apoio ao empregado.",
                    "selector":true,
                    "parent":document.querySelector('div#destino'),
                    "tag":"div"
                });
            } else {
                var recuper = criarElement({
                    "attributes":{
                        "class":"recuperarSenha",
                    },
                    "selector":true,
                    "parent":document.querySelector('div#destino'),
                    "tag":"div"
                });
                var recuper2 = criarElement({
                    "textoHtml":"Localizamos o seguinte e-mail: ",
                    "parent":recuper.id,
                    "tag":"div"
                });
                var recuper2 = criarElement({
                    "id":false,
                    "attributes":{
                        "style":"font-weight: bolder;",
                    },
                    "textoHtml":res.email,
                    "parent":recuper2.id,
                    "tag":"span"
                });
                criarElement({
                    "id":false,
                    "textoHtml":"Se ele estiver certo, clique em NOVA SENHA para receber a nova senha nesse e-mail.",
                    "parent":recuper.id,
                    "tag":"div"
                });
                var recuper2 = criarElement({
                    "attributes":{
                        "style":"display:flex;justify-content: center;",
                    },
                    "parent":recuper.id,
                    "tag":"div"
                });
                criarElement({
                    "id":false,
                    "attributes":{
                        "class":"btn btn-info",
                        "onClick":"novaSenha('"+res.codigo+"');",
                    },
                    "textoHtml":"NOVA SENHA",
                    "parent":recuper2.id,
                    "tag":"button"
                });
                criarElement({
                    "id":false,
                    "textoHtml":"Se ele estiver incorreto ou não for mais seu, entre em contato com nosso setor de apoio ao empregado para alterar o e-mail e a senha de acesso.",
                    "parent":recuper.id,
                    "tag":"div"
                });
                // changeAttributes({
                //     "attributes": {
                //         "type":"button",
                //         "onclick":false,
                //     },
                //     "removeClass": ['btn-secondary', 'btn-danger', 'btn-success'],
                //     "addClass": ['nohand','btn-warning'],
                //     "htmlText": "Logado!",
                //     "selector": "section#login button",
                // });
                // window.location = 'dashboard.html';
            }
        }   
    }
    xmlhttp.open("POST","session/recuperarSenha.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("instrucoes="+JSON.stringify(instrucoes));
    return;
}
function novaSenha(codigo) {
    var instrucoes = {
        "codigo":codigo,
    };
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) { // IE
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {
            }
        }
    }
// console.log(instrucoes)
// console.log(JSON.stringify(instrucoes))

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            var resposta = xmlhttp.responseText;
            console.log(resposta)
            // document.getElementById('destino').innerHTML = resposta;
            let res = JSON.parse(resposta);
            console.log(res)
            if(res == true) {
                document.getElementById('destino').innerHTML = "Pronto! O e-mail com a nova senha foi enviado";
            } else {
                document.getElementById('destino').innerHTML = "Ocorreu algum problema. Entre em contato com nossa equipe de apoio ao empregado.";
            }
        }   
    }
    xmlhttp.open("POST","session/novaSenha.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("instrucoes="+JSON.stringify(instrucoes));
    return;
}
function login() {
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        if (event) { event.preventDefault(); }
    }, false);
    changeAttributes({
        "attributes": {
            "type":"button",
            "onclick":false,
        },
        "removeClass": ['btn-secondary', 'btn-danger'],
        "addClass": ['nohand'],
        "htmlText": "<div class=\"spinner-border white\"></div> Logando ...",
        "selector": "section#login button",
    });
    document.getElementsByClassName('alertaErros')[0]?.remove();
   let erros = formControl('loginForm');
    if(erros.length > 0) {
        alertErros({
            "selectorTarget":"form#loginForm",
            "erros":erros,
        });
        changeAttributes({
            "attributes": {
                "type":"type",
                "onclick":"login();",
            },
            "removeClass": ['btn-secondary', 'btn-danger', 'nohand'],
            "addClass": ['btn-success'],
            "htmlText": "Login no sistema",
            "selector": "section#login button",
        });
    } else {
        var instrucoes = {
            "usuario":form.querySelector('input[name=cpfUsuario]').value,
            "senha":form.querySelector('input[name=senha]').value,
        };
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) { // IE
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } 
                catch (e) {
                }
            }
        }
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                var res = xmlhttp.responseText;
                // document.getElementById('destino').innerHTML = resposta;
                try {
                let res = JSON.parse(res);
                } catch (e) {
                    console.error("A resposta do servidor não é um JSON válido: ", res);
                }
                // console.log(res);
                if(res == false) {
                    changeAttributes({
                        "attributes": {
                            "type":"type",
                            "onclick":"login();",
                        },
                        "removeClass": ['btn-secondary', 'btn-danger', 'nohand'],
                        "addClass": ['btn-success'],
                        "htmlText": "Login no sistema",
                        "selector": "section#login button",
                    });
                    alertErros({
                        "selectorTarget":"form#loginForm",
                        "erros":['Senha e/ou usuário incorretos'],
                    });
                } else {
                    changeAttributes({
                        "attributes": {
                            "type":"button",
                            "onclick":false,
                        },
                        "removeClass": ['btn-secondary', 'btn-danger', 'btn-success'],
                        "addClass": ['nohand','btn-warning'],
                        "htmlText": "Logado!",
                        "selector": "section#login button",
                    });
                    window.location = 'dashboard.html';
                }
            }   
        }
        xmlhttp.open("POST","session/login.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("instrucoes="+JSON.stringify(instrucoes));
    }
    return;
}