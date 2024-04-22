// ÚLITMO - 10
async function coringa(codigo, instrucoes) {
    var instrucoesEnviadas = '';
    if(instrucoes != null) {
        if(typeof(instrucoes) != 'object') {
            instrucoes = JSON.parse(instrucoes);
        }
        for (const [key, value] of Object.entries(instrucoes)) {
            instrucoesEnviadas += '&'+encodeURIComponent(key)+'='+encodeURIComponent(value);
        }
    }
    var extra = '';
    if (['10'].includes(codigo)) {
        var form = document.getElementById(instrucoes.nomeFormulario);
        form.addEventListener('submit', (event) => {
            if (event) { event.preventDefault(); }
        }, false);
        var controle = formControl(instrucoes.nomeFormulario, 'respostaPadroes2');
        document.getElementById('respostaPadroes2').innerHTML = '';
        if(controle.length > 0) {
            window.location = '#respostaPadroes2';
            alertErros({
                "selectorTarget":"div#respostaPadroes2",
                "erros":controle
            })
            return;
        }
        extra = "&"+serialize(instrucoes.nomeFormulario);
        // console.log(extra);
    } else if(codigo == 8) {
        var idBlackScreen = blackScreen();
        criarModal({
            "idBlackScreen":idBlackScreen,
            "top":{
                "texto":"Excluindo Usuário",
            },
            "main":{
                "texto":"",
            },
        });
        oqueDevoSaber({
           "selectorTarget":"div.modal_main",
           "posicao":"prepend",
           "pergunta":"O que devo saber?",
           "explicacoes":[
               'A exclusão é irreversível',
               'Você somente estará excluindo o usuário do Portal '+(instrucoes.portal == 'admin' ? 'Administrativo' : 'do Dep. RH'),
               'Para excluir o usuário também do Portal '+(instrucoes.portal != 'admin' ? 'Administrativo' : 'do Dep. RH')+', escolha a opção Usuários do Portal '+(instrucoes.portal != 'admin' ? 'Administrativo' : 'do Dep. RH'),
           ],
        });
        var obj = JSON.stringify(instrucoes);
        criarElement({
            "id":false,
            "attributes":{
                "class":"btn btn-danger",
                "type":"submit",
                "onclick":"coringa('9','"+obj+"');",
            },
            "textoHtml":"Clique para Excluir",
            "selector":true,
            "parent":document.querySelector('div.modal_main'),
            "tag":"button"
        });
        return;
    }
    return new Promise((resolve, reject) => {
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
        // console.log(instrucoesEnviadas);
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                if(xmlhttp.responseText) {
                    var retorno = JSON.parse(xmlhttp.responseText);
                }
                if(codigo == 4 || codigo == 7) {
                    retorno['tabela'] = (codigo == 4 ? 'admin' : 'deprh');
                } else if(codigo == 9) {
                    if(retorno == true) {
                        informaSucesso('Usuário excluído com sucesso',1700);
                        document.querySelector('div.blackScreenModal div.modal_close')?.click();
                        document.querySelector('section#main > div.principal').innerHTML = '';
                    }
                } else if(codigo == 10) {
                    document.getElementById('respostaPadroes2').innerHTML = xmlhttp.responseText;
                    if(retorno == true) {
                        document.getElementById(instrucoes.nomeFormulario).reset();
                        informaSucesso('Usuário incluído',1700);
                    }
                }
                resolve(retorno);
            }
        }
        xmlhttp.open("POST","processadorAjax.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("action=superCoringa&codigo="+codigo+extra+instrucoesEnviadas);
    });
}

function novoUsuarioForm (objeto) {
    document.querySelector('section#main > div.principal').innerHTML = '';
    var divPrincipal = criarElement({
        "attributes":{
            "class":"editandoInformacoesUsuario"
        },
        "selector":true,
        "parent":document.querySelector('section#main > div.principal'),
        "tag":"div"
    });
    criarElement({
        "id":"editandoUsuarioForm",
        "parent":divPrincipal.id,
        "tag":"form"
    });
    criarElement({
        "id":false,
        "attributes":{
            "type":"hidden",
            "name":"tabela",
            "value":objeto.tabela,
        },
        "parent":"editandoUsuarioForm",
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"Criando novo Usuário para o Portal "+(objeto.tabela == 'admin' ? 'Administrativo' : 'do Dep. RH'),
        "parent":"editandoUsuarioForm",
        "tag":"h2"
    });
    criarElement({
        "id":false,
        "attributes":{
            "style":"margin-top: 25px;",
        },
        "parent":"editandoUsuarioForm",
        "tag":"fieldset"
    });
    criarElement({
        "id":false,
        "textoHtml":"Informações",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"legend"
    });
    criarElement({
        "id":false,
        "textoHtml":"Nome do Usuário",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"form-control",
            "type":"text",
            "name":"nomeCompleto",
            "placeholder":"Nome do Usuário",
            "form-control":"caracteres3",
            "aria-label":"Nome do Usuário",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"CPF",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"label"
    });
    criarElement({
        "id":"cpfInput",
        "attributes":{
            "class":"form-control",
            "type":"tel",
            "name":"cpf",
            "placeholder":"CPF",
            "form-control":"cpf",
            "aria-label":"CPF",
            "onkeyup":"formatacaoEspecifica (this.value,'cpf','cpfInput');",
            "onchange":"formatacaoEspecifica (this.value,'cpf','cpfInput');"
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"Iniciais do Nome do Usuário",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"form-control",
            "type":"text",
            "name":"iniciais",
            "placeholder":"Iniciais",
            "form-control":"letras3",
            "aria-label":"Iniciais",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"Telefone Celular",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"label"
    });
    criarElement({
        "id":"telefoneInput",
        "attributes":{
            "class":"form-control",
            "type":"tel",
            "name":"telefone",
            "placeholder":"Telefone Celular",
            "form-control":"telefoneCelular",
            "aria-label":"Celular",
            "onkeyup":"formatacaoEspecifica (this.value,'telefone','telefoneInput');",
            "onchange":"formatacaoEspecifica (this.value,'telefone','telefoneInput');"
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"Senha (somente preencha se desejar alterar)",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"form-control",
            "type":"password",
            "name":"senha",
            "placeholder":"Senha",
            "form-control":"notNull",
            "aria-label":"Senha",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "attributes":{
            "style":"margin-top: 25px;",
        },
        "parent":"editandoUsuarioForm",
        "tag":"fieldset"
    });
    criarElement({
        "id":false,
        "textoHtml":"Permissões",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"legend"
    });
    criarElement({
        "id":false,
        "textoHtml":"Dias Autorizados",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"diasSemana"
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"div"
    });
    const diasSemana = {
        "0":"SEG",
        "1":"TER",
        "2":"QUA",
        "3":"QUI",
        "4":"SEX",
        "5":"SÁB",
        "6":"DOM",
    }
    for (const [key, value] of Object.entries(diasSemana)) {
        var checked = true;
        if(objeto.tabela == 'deprh' && (key == 5 || key == 6)) {
            checked = false;
        }
        criarElement({
            "id":false,
            "selector":true,
            "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana'),
            "tag":"div"
        });
        criarElement({
            "id":"dia_"+key,
            "attributes":{
                "type":"checkbox",
                "name":"dia_"+key,
                "checked":checked,
            },
            "selector":true,
            "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana > div:last-of-type'),
            "tag":"input"
        });
        criarElement({
            "id":false,
            "attributes":{
                "for":"dia_"+key,
            },
            "textoHtml":value,
            "selector":true,
            "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana > div:last-of-type'),
            "tag":"label"
        });
    }
    criarElement({
        "id":false,
        "textoHtml":"Horário Autorizado",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"horario",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"div"
    });
    var horario_1 = '00:00';
    var horario_2 = '23:59';
    if(objeto.tabela == 'deprh') {
        var horario_1 = '08:00';
        var horario_2 = '19:00';
    }
    criarElement({
        "id":false,
        "attributes":{
            "class":"form-control",
            "name":"horarioInicial",
            "type":"time",
            "value":horario_1,
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.horario'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"form-control",
            "name":"horarioFinal",
            "type":"time",
            "min":"00:01",
            "max":"23:59",
            "value":horario_2,
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.horario'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "textoHtml":"Status do Usuário",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "attributes":{
            "class":"statusSuspensao",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
        "tag":"div"
    });
    criarElement({
        "id":"status",
        "attributes":{
            "type":"checkbox",
            "name":"status",
        },
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.statusSuspensao'),
        "tag":"input"
    });
    criarElement({
        "id":false,
        "attributes":{
            "for":"status",
        },
        "textoHtml":"Suspender",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.statusSuspensao'),
        "tag":"label"
    });
    criarElement({
        "id":false,
        "parent":"editandoUsuarioForm",
        "tag":"div"
    });
    var obj = JSON.stringify({"nomeFormulario":"editandoUsuarioForm"});
    criarElement({
        "id":false,
        "attributes":{
            "style":"margin-right:5px;",
            "class":"btn btn-success",
            "type":"submit",
            "onclick":"coringa('10','"+obj+"');",
        },
        "textoHtml":"Incluir",
        "selector":true,
        "parent":document.querySelector('form#editandoUsuarioForm > div:last-of-type'),
        "tag":"button"
    });
    criarElement({
        "id":"respostaPadroes2",
        "attributes":{
            "style":"margin-top:10px;",
        },
        "parent":"editandoUsuarioForm",
        "tag":"div"
    });
    return;
}
