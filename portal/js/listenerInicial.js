/*
function primeiroAcesso() {
	var form = document.getElementById('primeiroAcessoForm');
	form.addEventListener('submit', (event) => {
		if (event) { event.preventDefault(); }
	}, false);
	extra = "&"+serialize('primeiroAcessoForm');
	var controle = formControl('primeiroAcessoForm', 'retornoPrimeiroAcesso');
	document.getElementById('retornoPrimeiroAcesso').innerHTML = '';
	if(controle.length > 0) {
		window.location = '#retornoPrimeiroAcesso';
		alertErros({
			"selectorTarget":"div#retornoPrimeiroAcesso",
			"erros":controle
		})
		return;
	} else {
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
				const resposta = JSON.parse(xmlhttp.responseText);
				changeAttributes({
					"selector": "form#primeiroAcessoForm button",
					"removeClass": ['btn-success'],
					"addClass": ['nohand', 'btn-secondary'],
					"htmlText": "Cadastrando...",
					"attributes": {
						"onclick":false,
						"type":"button",
					},
				});
				if(resposta.retorno == false) {
					window.location = '#retornoPrimeiroAcesso';
					alertErros({
						"selectorTarget":"div#retornoPrimeiroAcesso",
						"erros":resposta.erros
					});
					changeAttributes({
						"selector": "form#primeiroAcessoForm button",
						"removeClass": ['nohand', 'btn-secondary'],
						"addClass": ['btn-success'],
						"htmlText": "Pedir a senha",
						"attributes": {
							"onclick":"primeiroAcesso();",
							"type":"submit",
						},
					});
				} else {
					changeAttributes({
						"selector": "form#primeiroAcessoForm button",
						"removeClass": ['btn-success'],
						"addClass": ['nohand', 'btn-secondary'],
						"htmlText": "Enviando e-mail...",
						"attributes": {
							"onclick":false,
							"type":"button",
						},
					});
					var destino = document.querySelector('div.primeiroAcesso');
					destino.innerHTML = "";
					criarElement({
						"id":false,
						"textoHtml":"X",
						"selector":true,
						"parent":destino,
						"tag":"div"
					});
					criarElement({
						"id":false,
						"textoHtml":"Sua senha de acesso ao Portal Corporativo do Grupo First RH foi enviada por e-mail neste momento.",
						"selector":true,
						"parent":destino,
						"tag":"div"
					});
					criarElement({
						"id":false,
						"textoHtml":"Nossa equipe irá examinar seu pedido de acesso e, uma vez aprovado, entraremos em contato para avisá-lo.",
						"selector":true,
						"parent":destino,
						"tag":"div"
					});
					criarElement({
						"id":false,
						"textoHtml":"Até a aprovação pela equipe do Dep. de RH, seu acesso não estará liberado.",
						"selector":true,
						"parent":destino,
						"tag":"div"
					});
					criarElement({
						"id":false,
						"textoHtml":"Fique tranquilo. Avisaremos por telefone e por e-mail quando o acesso for liberado.",
						"selector":true,
						"parent":destino,
						"tag":"div"
					});
					const closeButton = document.querySelector('div.primeiroAcesso > div:first-of-type');
					closeButton?.addEventListener('click', () => {
						closeBlackScreen();
					});
				}
			}
		}
		xmlhttp.open("POST","processadorAjax.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("action=superCoringa&codigo=11"+extra);
	}
}
*/
async function confereExistenciaColaborador(cpf) {
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
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                resolve(xmlhttp.responseText);
            }
        }
        xmlhttp.open("POST","processadorAjax.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("action=superCoringa&codigo=12&cpf="+cpf);
    });
}
var cpfUsuario = document.querySelector('input#cpfUsuario');
cpfUsuario?.addEventListener('keyup', () => {
	formatacaoEspecifica (cpfUsuario.value,'cpf','cpfUsuario');
	if(soNumeros(cpfUsuario.value).length == 11) {
	   if(valida_CPF(cpfUsuario.value)) {
		function isJson(str) {
			try {
				JSON.parse(str);
			} catch (e) {
				return false;
			}
			return true;
		}
			confereExistenciaColaborador(cpfUsuario.value).
			then((retorno) => {
				if (isJson(retorno)) {
					retorno = JSON.parse(retorno);
				} else {
					console.error('A resposta não é um JSON válido:', retorno);
				}
				if(retorno.retorno == true) {
					changeAttributes({
						"selector": "button#loginButton",
						"removeClass": ['nohand', 'btn-secondary', 'btn-danger'],
						"addClass": ['btn-success'],
						"htmlText": "Login no sistema",
						"attributes": {
							"onclick":"login();",
							"type":"submit",
						},
					});
					changeAttributes({
						"selector": "button#recuperarButton",
						"removeClass": ['nohand', 'btn-secondary'],
						"addClass": ['btn-info'],
						"attributes": {
							"onclick":"recuperarSenha('"+cpfUsuario.value+"');",
						},
					});
				} else {
					changeAttributes({
						"selector": "button#loginButton",
						"removeClass": ['btn-success','btn-secondary'],
						"addClass": ['nohand', 'btn-danger'],
						"htmlText": "Colaborador não cadastrado.",
						"attributes": {
							"onclick":false,
						},
					});
					changeAttributes({
						"selector": "button#recuperarButton",
						"removeClass": ['btn-info'],
						"addClass": ['nohand', 'btn-secondary'],
						"attributes": {
							"onclick":false,
						},
					});
				}

			});
		}
		else {
			changeAttributes({
				"selector": "button#loginButton",
				"removeClass": ['btn-success','btn-secondary'],
				"addClass": ['nohand', 'btn-danger'],
				"htmlText": "Confira o CPF",
				"attributes": {
					"onclick":false,
				},
			});
			changeAttributes({
				"selector": "button#recuperarButton",
				"removeClass": ['btn-info'],
				"addClass": ['nohand', 'btn-secondary'],
				"attributes": {
					"onclick":false,
				},
			});
		}
	}
	else {
		changeAttributes({
			"selector": "button#loginButton",
			"removeClass": ['btn-success','btn-danger'],
			"addClass": ['nohand', 'btn-secondary'],
			"htmlText": "Login no sistema",
			"attributes": {
				"onclick":false,
				"type":"button",
			},
		});
		changeAttributes({
			"selector": "button#recuperarButton",
			"removeClass": ['btn-info'],
			"addClass": ['nohand', 'btn-secondary'],
			"attributes": {
				"onclick":false,
			},
		});
	}
});
window.addEventListener("load", () => {
	if(valida_CPF(cpfUsuario?.value)) {
		changeAttributes({
			"selector": "button#loginButton",
			"removeClass": ['nohand', 'btn-secondary', 'btn-danger'],
			"addClass": ['btn-success'],
			"htmlText": "Login no sistema",
			"attributes": {
				"onclick":"login();",
				"type":"submit",
			},
		});
		changeAttributes({
			"selector": "button#recuperarButton",
			"removeClass": ['nohand', 'btn-secondary'],
			"addClass": ['btn-info'],
			"attributes": {
				"onclick":"recuperarSenha('"+cpfUsuario.value+"');",
			},
		});
	}
	// const primeiroAcesso = document.getElementById('primeiroAcessoButton');
	// primeiroAcesso.addEventListener('click',(evento) => {
	// 	var idBlackScreen = blackScreen();
	// 	setTimeout(function () {document.getElementById(idBlackScreen).classList.remove('fadeOutBlackScreen');}, 100);
	// 	criarElement({
	// 		"id":false,
	// 		"attributes":{
	// 			"class":"primeiroAcesso"
	// 		},
	// 		"parent":idBlackScreen,
	// 		"tag":"div"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"X",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso'),
	// 		"tag":"div"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"Seja muito bem-vindo(a) ao Grupo First RH",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso'),
	// 		"tag":"div"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"Preencha cuidadosamente as informações requeridas. Você receberá, no e-mail informado, a senha de acesso.",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso'),
	// 		"tag":"div"
	// 	});
	// 	criarElement({
	// 		"id":"primeiroAcessoForm",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso'),
	// 		"tag":"form"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"Nome Completo",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"label"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"attributes":{
	// 			"class":"form-control",
	// 			"name":"nomeCompleto",
	// 			"type":"text",
	// 			"form-control":"caracteres8",
	// 			"aria-label":"Nome Completo",
	// 		},
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"input"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"CPF",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"label"
	// 	});
	// 	criarElement({
	// 		"id":"cpf",
	// 		"attributes":{
	// 			"class":"form-control",
	// 			"name":"cpf",
	// 			"type":"tel",
	// 			"form-control":"cpf",
	// 			"aria-label":"CPF",
	// 			"onkeyup":"formatacaoEspecifica(this.value,'cpf','cpf');",
	// 		},
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"input"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"textoHtml":"E-mail",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"label"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"attributes":{
	// 			"class":"form-control",
	// 			"name":"email",
	// 			"type":"email",
	// 			"form-control":"email",
	// 			"aria-label":"Email",
	// 		},
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"input"
	// 	});
	// 	criarElement({
	// 		"id":"primeiroAcessoForm",
	// 		"textoHtml":"Telefone Celular",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"label"
	// 	});
	// 	criarElement({
	// 		"id":"telefones",
	// 		"attributes":{
	// 			"class":"form-control",
	// 			"name":"telefones",
	// 			"type":"tel",
	// 			"form-control":"telefoneCelular",
	// 			"aria-label":"Telefone Celular",
	// 			"onkeyup":"formatacaoEspecifica(this.value,'telefone','telefones');",
	// 		},
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"input"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form'),
	// 		"tag":"div"
	// 	});
	// 	criarElement({
	// 		"id":false,
	// 		"attributes":{
	// 			"class":"btn btn-success",
	// 			"type":"submit",
	// 			"onClick":"primeiroAcesso();",
	// 		},
	// 		"textoHtml":"Pedir a senha",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso > form > div:last-of-type'),
	// 		"tag":"button"
	// 	});
	// 	criarElement({
	// 		"id":"retornoPrimeiroAcesso",
	// 		"selector":true,
	// 		"parent":document.querySelector('div#'+idBlackScreen+' > div.primeiroAcesso'),
	// 		"tag":"div"
	// 	});
	// 	const closeButton = document.querySelector('div.primeiroAcesso > div:first-of-type');
	// 	closeButton?.addEventListener('click', () => {
	// 		closeBlackScreen();
	// 	});
	// 	document.onkeydown = function (evt) {
	// 		evt = evt || window.event;
	// 		if (evt.keyCode == 27) {
	// 			closeButton?.click();
	// 		 }
	// 	 };


	// });

});