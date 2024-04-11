function obterDadosDoUsuario(cpf, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/projeto_ett/portal/session/form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (this.status == 200 && this.responseText.trim() !== '') {
            var response = this.responseText;
            try {
                response = JSON.parse(response);
            } catch (e) {
                console.error('A resposta do servidor não é um JSON válido:', this.responseText);
                return;
            }
        }
        console.log ('Dados do usuário', response);
        callback(response);
    };
    xhr.send(JSON.stringify({ cpf: cpf }));
}
function ajustarMenuPorGroupId(cpf) {
    obterDadosDoUsuario(cpf, function(usuario) {
        var grupoId = usuario.grupo_id;

        // Obtenha os elementos do menu pelo id
        let adminMenu = document.getElementById('adminMenu');
        let financeiroMenu = document.getElementById('financeiroMenu');
        let siteMenu = document.getElementById('siteMenu');

        // Se o grupo_id for 1, mostre todo o menu
        if (grupoId == 1) {
            adminMenu.style.display = 'block';
            financeiroMenu.style.display = 'block';
            siteMenu.style.display = 'block';
        } else {
            // Caso contrário, oculte os elementos do menu que não devem ser mostrados
            adminMenu.style.display = 'none';
            financeiroMenu.style.display = 'none';
            siteMenu.style.display = 'none';
        }
    });
}
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
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
            try {
                var resposta = xmlhttp.responseText;
                let res = JSON.parse(resposta);
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
        } catch (e) {
            console.error("A resposta do servidor não é um JSON válido: ", resposta);
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
            "htmlText": "LOGIN NO SISTEMA",
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
                console.log('Resposta do servidor (como texto):', res); // Adicionado esta linha
                if (res !== false) {
                    var cpf = form.querySelector('input[name=cpfUsuario]').value;
                    cpf = cpf.replace(/\D/g, '');
                    console.log(cpf);
                    localStorage.setItem('cpf', cpf);
                    document.getElementById('destino').innerHTML = res;
                    console.log('Resposta do servidor:', res); // Adicionado esta linha
                    try {
                        if (isJsonString(res)) {
                            res = JSON.parse(res);
                            console.log('Resposta do servidor (como objeto):', res);
                            if (res.grupo_id) {
                                localStorage.setItem('userData', JSON.stringify(res));
                                ajustarMenuPorGroupId(cpf);
                            } else {
                                console.error("A resposta do servidor não contém um campo id: ", res);
                            }
                        } else {
                            console.error("A resposta do servidor não é um JSON válido: ", res);
                            // Trate res como uma string normal aqui
                        }
                    } catch (e) {
                        console.error("Erro ao processar a resposta do servidor: ", e);
                    }
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
                        "htmlText": "LOGIN NO SISTEMA",
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
document.getElementById('recuperarButton').addEventListener('click', function() {
    var loginDiv = document.querySelector('section#login > div');
    loginDiv.style.height = 'auto'; // ou qualquer outro valor que você queira definir
});