function testeForm(restricao, valor) {
	if(restricao == 'letras3') {
		var pattern = /[a-z]{3,}/i;
		var found = valor.match(pattern);
		if(found == null) {
			return false;
		} else {
			return true;
		}
	} else if(restricao == 'caracteres3') {
		if(valor.length >= 3) {
			return true;
		} else {
			return false;
		}
	} else if(restricao == 'caracteres8') {
		if(valor.length >= 8) {
			return true;
		} else {
			return false;
		}
	} else if(restricao == 'telefoneCelular') {
		if(soNumeros(valor).length == 11) {
			return true;
		} else {
			return false;
		}
		/*
		var pattern = /(.*\d.*){11}/;
		var found = valor.match(pattern);
		if(found == null) {
			return false;
		}
		else {
			return true;
		}
		*/
	} else if(restricao == 'notNull') {
		var pattern = /([a-z0-9]){1,}/i;
		var found = valor.match(pattern);
		if(found == null) {
			return false;
		} else {
			return true;
		}
	} else if(restricao == 'email') {
		if(validaEmail(valor) == 1) {
			return true;
		} else {
			return false;
		}
	} else if(restricao == 'inteiro') {
		valor = valor * 1;
		if (Number.isInteger(valor) && valor != 0 && valor != null) {
			return true;
		} else {
			return false;
		}
	} else if(restricao.substring(0,6) == 'maior_') {
		var comparacao = restricao.substring(6) * 1;
		valor = floatValor(valor);

		if (valor > floatValor(comparacao)) {
			return true;
		} else {
			return false;
		}
	} else if(restricao.substring(0,6) == 'entre_') {
		valor = floatValor(valor);
		if (valor >= floatValor(restricao.split('_')[1]) && valor <= floatValor(restricao.split('_')[2])) {
			return true;
		} else {
			return false;
		}
	} else if(restricao == 'cpf') {
		if (valor == '' || !valor) {
			return false;
		} else if (valida_CPF(soNumeros(valor))) {
			return true;
		} else {
			return false;
		}
	} 
}
function explicacaoRestricao(restricao) {
	if(restricao == 'letras3') {
		return "mínimo de 3 letras";
	} else if(restricao == 'email') {
		return "em formato inválido";
	} else if(restricao == 'notNull') {
		return "verifique o campo indicado";
	} else if(restricao == 'caracteres3') {
		return "mínimo de 3 caracteres";
	} else if(restricao == 'caracteres8') {
		return "mínimo de 8 caracteres";
	} else if(restricao == 'telefoneCelular') {
		return "11 números, contando com o código de área";
	} else if(restricao == 'inteiro') {
		return "dever ser um número inteiro";
	} else if(restricao == 'cpf') {
		return "inválido";
	} else if (restricao.substring(0,6) == 'maior_') {
		var comparacao = restricao.substring(6) * 1;
		return "deve ser um número maior do que "+comparacao;
	} else if(restricao.substring(0,6) == 'entre_') {
		return "deve ser maior ou igual a "+restricao.split('_')[1]+" e menor ou igual a "+restricao.split('_')[2];
	} else {
		return "";
	}
}
function formControl(formularioId) {
	var elementos = document.querySelectorAll("form#"+formularioId+" [form-control]");
    var erros = [];
    for (interno = 0; interno < elementos.length; interno++) {
        if(testeForm(elementos[interno].getAttribute("form-control"), elementos[interno].value) == false) {
            erros.push( [ elementos[interno].getAttribute("aria-label")+" "+explicacaoRestricao(elementos[interno].getAttribute("form-control")) ] );
        }
	}
	return erros;
}
function alertErros(objeto) {
    var alert = criarElement({
        "attributes": {
            "class":"alertaErros alerta-danger",
        },
        "selector":true,
        "parent":document.querySelector(objeto.selectorTarget),
        "tag":"div"
    });
    criarElement({
        "id":false,
        "parent":alert.id,
        "texto":"Atenção, confira os ítens abaixo:",
        "tag":"div"
    });
    criarElement({
        "id":false,
        "parent":alert.id,
        "tag":"ul"
    });
    objeto.erros.forEach(element => {
        criarElement({
            "id":false,
            "selector":true,
            "parent":document.querySelector('div#'+alert.id+' ul'),
            "texto":element,
            "tag":"li"
        });
    });
	scrollToElement(objeto.selectorTarget);
   return;
}
function oqueDevoSaber(objeto) {
    var alert = criarElement({
        "attributes": {
            "class":"alert alert-primary",
        },
        "posicao":objeto.posicao,
        "selector":true,
        "parent":document.querySelector(objeto.selectorTarget),
        "tag":"div"
    });
	criarElement({
        "id":false,
		"attributes": {
            "class":"font-18 negrito",
        },
        "parent":alert.id,
        "texto":objeto.pergunta,
        "tag":"div"
    });
    objeto.explicacoes.forEach(element => {
		criarElement({
			"id":false,
			"parent":alert.id,
            "texto":element,
            "tag":"li"
        });
    });
	return;
}