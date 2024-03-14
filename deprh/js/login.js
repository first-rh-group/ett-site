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
                var resposta = xmlhttp.responseText;
                // document.getElementById('destino').innerHTML = resposta;
                let res = JSON.parse(resposta);
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
                        "erros":['Senha e/ou usuário incorretos','Confira o dia e horário autorizados para o login'],
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