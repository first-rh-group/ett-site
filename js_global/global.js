function funcaoGeral(valor1,valor2,valor3,valor4,valor5) {
	switch (valor1) {
		case '1':
		$("#"+valor2).removeClass("btn-ligamos");
		$("#"+valor2).addClass("btn-experimente");
		document.getElementById(valor2).value = "EXPERIMENTE GRÁTIS";
		break;
		case '2':
		window.location = valor2;
		break;
		case '3':
		window.open(valor2);
		break;
		case '4':
		// mostra
		$("#"+valor2).fadeIn("slow");
		break;
		case '5':
		// apaga
		$("#"+valor2).fadeOut("slow");
		break;
		case '6':
		$("#"+valor2).fadeOut("fast");
		break;
		case '7':
		$("#"+valor2).fadeIn("fast");
		break;
		case '8':
		$("#"+valor2).removeClass("btn-ligamos");
		$("#"+valor2).addClass("btn-experimente");
		document.getElementById(valor2).value = "CADASTRAR";
		break;
		case '9':
		$("#"+valor2).css({ display: "none" });
		break;
		case '10':
		$("#"+valor2).removeClass(valor3);
		break;
		case '11':
		$("#"+valor2).addClass(valor3);
		break;
		case '12':
		document.getElementById(valor2).innerHTML=valor3;
		break;
		case '13':
		document.getElementById(valor2).innerHTML="";
		break;
		case '14':
		$("#"+valor2).slideUp("slow");
		break;
		case '15':
		$("#"+valor2).slideDown("slow");
		break;
		case '16':
		$("#"+valor2).fadeIn("slow");
		$('.animated').autosize();
		break;
		case '17':
		document.getElementById('atencao').innerHTML="<div>"+valor2+"</div>";
		$("#atencao").fadeIn("slow");
		$("#blackScreen").css({ display: "block" });
		break;
		case '18':
		$('.animated').autosize();
		break;
		case '18.1':
		setTimeout("funcaoGeral('18');",300);
		setTimeout("funcaoGeral('18');",2000);
		break;
		case '19':
		 $('#'+valor2).val(valor3);
		break;
		case '20':
		$('#'+valor2).val($('#'+valor2).val().toUpperCase());
		break;
		case '21':
		document.getElementById(valor2).checked = true;
		break;
		case '22':
		document.getElementById(valor2).checked = false;
		break;
		case '23':
		document.getElementById(valor2).appendChild(valor3);
		break;
		case '24':
		$("#"+valor2).css({ display: "flex" });
		break;
	}
}
function printValor(number, decimals, dec_point, thousands_sep) {
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}
function soNumeros(nm){
	var pattern = /[0-9]/gm;
	return (nm.match(pattern) || []).join('')
}
function floatValor(valor)
{
	var negativo = false;
	var re = /^-/i;
	var found = String(valor).match(re);
	if (found) {
		negativo = true;
	}
	valor = String(valor).replace(/\s|^-| /g, '');

	var resto = 0;
	var separado = valor.split(',');
	var separado_2 = valor.split('.');

	if(separado.length > 1) {
		resto = separado[(separado.length - 1)];
		resto = soNumeros(resto);
		separado[(separado.length - 1)] = '';
		valor = separado.join('');
		valor = String(valor).replace("/\.|,/", "");
		valor = soNumeros(valor);
	} else if(separado_2.length > 1) {
		resto = separado_2[(separado_2.length - 1)];
		resto = soNumeros(resto);
		separado_2[(separado_2.length - 1)] = '';
		valor = separado_2.join('');
		valor = String(valor).replace("/\.|,/", "");
		valor = soNumeros(valor);
	}
	valor = valor + '.' + resto;
	valor = parseFloat(valor);
	if (negativo && valor != 0) {
		valor = valor * -1;
	}
	return valor;
}
function autosize(elemento) {   
    elemento.style.height = 'auto';
    elemento.style.height = elemento.scrollHeight +'px';
    return;
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function geradorSenha(num_chars) {
    var consoantes = "bcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZBCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyz";
    var vogais = "aeiouAEIOUaeiou";
    var a = consoantes.length - 1; // Vê quantas consoantes existem
    var b = vogais.length - 1; // Vê quantas vogais existem
    var senha = '';
    var str = '';
    var str1 = '';
    var numero = '';
    var senha = [];
    for (x = 0; x < num_chars; x++) {
        var randConsoante = Math.floor(Math.random() * a) + 1; // Escolhe uma consoante aleatória
        var randVogal = Math.floor(Math.random() * b) + 1; // Escolhe uma consoante aleatória
        senha.push(Math.floor(Math.random() * 9) + 1);
        senha.push(consoantes.substr(randConsoante,1));
        senha.push(vogais.substr(randVogal,1));
    }
    return(shuffleArray(senha).join('').substr(0,num_chars));
} 
function infoDevice() {
	var teste = navigator.userAgent;
	if (/Mobi|Android/i.test(teste)) {
		return ({
			"device": 1,
			"navigator": teste
		});
	} else {
		return ({
			"device": 0,
			"navigator": teste
		});
	}
}
function fileSize(nBytes) {
	var sOutput = nBytes + " bytes";
  // optional code for multiples approximation
	for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
	}
	return sOutput;
}
function criarElement(objeto) {
	var elementoCriado = document.createElement(objeto.tag);
	if (objeto.id == null) {
		objeto.id = 'id-'+getRandomInt(10000000,99999999);
	}
	if (objeto.id !== false) {
		elementoCriado.setAttribute("id", objeto.id);
	}
	if (objeto.attributes != null) {
		const attributes = Object.entries(objeto.attributes);
		attributes.forEach(val => {
			if(val[0] == 'required') {
				if (val[1] == false) {
					elementoCriado.setAttribute("required", false);
					elementoCriado.removeAttribute("required")
				}
				else {
					elementoCriado.setAttribute("required", true);
				}
			}
			else if(val[0] == 'disabled') {
				if (val[1] == false) {
					elementoCriado.setAttribute("disabled", false);
					elementoCriado.removeAttribute("disabled");
				}
				else {
					elementoCriado.setAttribute("disabled", true);
				}
			}
			else if(val[0] == 'checked') {
				if (val[1] == false) {
					elementoCriado.removeAttribute("checked");
				}
				else {
					elementoCriado.setAttribute("checked", true);
				}
			}
			else if(val[0] == 'selected') {
				if (val[1] == false) {
					elementoCriado.setAttribute("selected", false);
					elementoCriado.removeAttribute("selected");
				}
				else {
					elementoCriado.setAttribute("selected", true);
				}
			}
			else {
				if (val[1] == false) {
					elementoCriado.removeAttribute(val[0]);
				} else {
					elementoCriado.setAttribute(val[0], val[1]);
				}
			}
		});
	}
	if (objeto.texto != null) {
		var textnode = document.createTextNode(objeto.texto);
		elementoCriado.appendChild(textnode);
	}
	if (objeto.textoHtml != null) {
		elementoCriado.innerHTML = objeto.textoHtml;
	}
	if (objeto.selector != null) {
		var elementoDestino = objeto.parent;
	}
	else {
		var elementoDestino = document.getElementById(objeto.parent);
	}
	if (objeto.target == 'before') {
		elementoDestino.before(elementoCriado);
	}
	else if (objeto.target == 'after') {
		elementoDestino.after(elementoCriado);
	}
	else {
		if (objeto.posicao == 'prepend') {
			elementoDestino.prepend(elementoCriado);
		}
		else {
			elementoDestino.appendChild(elementoCriado);
		}
	}
	return({
		"id": objeto.id
	});
}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
function ancoraTop (idElement) {
	// $('html, body').animate({scrollTop: $('#'+idElement).offset().top - 150 }, 1200);
	$('html, body').animate({scrollTop: $('#'+idElement).offset().top - 180 }, 1200);
}
function topPage() {
	$('html, body').animate({scrollTop:0}, 'slow');
}
function isset(variavel) {
	if (variavel != undefined) {
		return true;
	}
	else {
		return false;
	}
}
function validaEmail(email) {
    if(!email || email == "" || email == undefined) {
        return false;
    }
	// Formato email@dominio.tralala ou email@dominio.tralala.trololo
	var exp_email = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var tamanhoEmail = email.length;
	var primeiraPosicaoArroba=email.indexOf("@");
	var ultimaPosicaoArroba=email.lastIndexOf("@");
	var ultimaPosicaoPonto=email.lastIndexOf(".");
	if (tamanhoEmail == 0) {
		return false;
	}
	if (
		primeiraPosicaoArroba <1 || 
		ultimaPosicaoPonto < primeiraPosicaoArroba + 2 || 
		ultimaPosicaoPonto + 2 >= email.length || 
		ultimaPosicaoArroba == tamanhoEmail - 1
	)  {
		return false;
	}
	if ( !exp_email.test(email) ) {
		return false;
	}
    return true;
}
function formatacaoEspecifica (valorNaoFormatado,formatacaoDesejada,idElement) {
	var valorNaoFormatado = soNumeros(valorNaoFormatado);
	if (formatacaoDesejada == 'telefone') {
		if (valorNaoFormatado.length < 11  ) {
			var formatacaoDesejada = "(##) ####-####";
		}
		else {
			var formatacaoDesejada = "(##) ###-###-###";
		}
	}
	else if (formatacaoDesejada == 'cpf') {
		var formatacaoDesejada = "###.###.###-##";
	}
	else if (formatacaoDesejada == 'cnpj') {
		var formatacaoDesejada = "##.###.###/####-##";
	}
	else if (formatacaoDesejada == 'cpfcnpj') {
		if (valorNaoFormatado.length < 12 ) {
			var formatacaoDesejada = "###.###.###-##";
		}
		else {
			var formatacaoDesejada = "##.###.###/####-##";
		}
	}
	else if (formatacaoDesejada == 'data') {
		var formatacaoDesejada = "##-##-####";
	}
	else if (formatacaoDesejada == 'cnj') {
		var formatacaoDesejada = "#######-##.####.#.##.####";
	}
	else if (formatacaoDesejada == 'cep') {
		var formatacaoDesejada = "#####-###";      
	}
	else if (formatacaoDesejada == 'hora') {
		if( validaHorario(valorNaoFormatado) ) {
			var formatacaoDesejada = "##:##";       
		}
	}
	else if (formatacaoDesejada == 'valor') {
		ajustaValor2(valorNaoFormatado, 2, ',', '.', idElement);
		return;
	}
	var tamanhoEntrada = valorNaoFormatado.length;
	if(tamanhoEntrada < 4 ) {
		return;
	}
	var tamanhoSaida = formatacaoDesejada.length;
		tamanhoSaida--;
	var valorFormatado = "";
	var valorTemporario = "";
	var num = 0;
	var numFormat = 0;
	var numFormatTemp = 1;
	while( num <= tamanhoSaida ) {
		var numTemp = num + 1;
		var numFormatTemp = numFormat + 1;
		// verifico o caracter da mascara
		valorTemporario = formatacaoDesejada.substring(num,numTemp);
		if (valorTemporario == '#') {
			valorFormatado = valorFormatado+valorNaoFormatado.substring(numFormat,numFormatTemp);
		}
		else {
			valorFormatado = valorFormatado+valorTemporario;
			numFormat--;
		}
	num++;
	numFormat++;
	}
	document.getElementById(idElement).value = valorFormatado;
	return;
}
function ajustaValor (valor, idElement) {
	valor = soNumeros(valor);
	var tam = valor.length;
	if (tam == 0) {
		return;
	}
	var temp = tam - 2;
	var res1 = valor.substring(temp);
	var res2 = valor.substring(0,temp);
	res2 = res2 * 1;
	res2 = res2.toString();
	var temp2 = res2.length;
	if(temp2 > 3) {
		var numnovo = '';
		var numSobra = res2;
		var numTemp = '';
		var i = temp2;
		while(i >= 3) {
			var tamTemp = i - 3;    
			numTemp = numSobra.substring(tamTemp);
			numSobra = numSobra.substring(0,tamTemp);
			numnovo = numTemp+numnovo;
			if(i > 3) {
				numnovo = "."+numnovo;
			}
			if(i < 6) {
				numnovo = numSobra+numnovo;
			}
			i = i - 3;
		}
		res2 = numnovo;
	}
	if(res2.length == 0) {
		res2 = 0;
	}
	if(res1.length == 1) {
		res1 = "0"+res1;
	}
	var num = res2+","+res1;
	document.getElementById(idElement).value = num;
	return;
}
function ajustaValor2(number, decimals, dec_point, thousands_sep, idElement) {
	number = soNumeros(number);
	if (decimals == '1') {
		var divisao = 10;
	}
	if (decimals == '2') {
		var divisao = 100;
	}
	if (decimals == '3') {
		var divisao = 1000;
	}
	if (decimals == '4') {
		var divisao = 10000;
	}
	if (decimals == '5') {
		var divisao = 100000;
	}
	number = number / divisao;
	var valor = printValor(number, decimals, dec_point, thousands_sep);
	document.getElementById(idElement).value = valor;
}
//HORA HORARIO INFORMADO VERIFICA  VALIDA
function validaHorario(digHorario) {
	var horario = digHorario; 
	horario = soNumeros(horario);
	var tam = horario.length;   
	var hora = horario.substring(0, 2);
	var min = horario.substring(2, 4);
		if (tam != 4 && tam != 0) {
		return false;
		}
		if (hora > 23){
		return false;
		}
		if (min > 59){
		return false;
		}
	return true;
}
function fadeOutBlackScreen() {
    document.querySelector('div.blackScreenModal')?.classList.add('fadeOutBlackScreen');
    setTimeout("closeBlackScreen()",600);
}
function closeBlackScreen() {
    document.querySelector('div.blackScreenModal')?.remove();
}
function blackScreen() {
    var blackScreen = criarElement({
        "attributes": {
            "class":"blackScreenModal fadeOutBlackScreen blackScreen",
        },
        "selector":true,
        "parent":document.body,
        "tag":"div"
    });
    return blackScreen.id;    
}
function criarModal(objeto) {
    var modal = criarElement({
        "attributes": {
            "class":"modalFirst fadeInDown",
        },
        "parent":objeto.idBlackScreen,
        "tag":"div"
    });
    criarElement({
        "id":false,
        "attributes": {
            "class":"modal_top",
            "style":"background-color:"+objeto.top.color,
        },
        "texto":objeto.top.texto,
        "parent":modal.id,
        "tag":"div"
    });
    criarElement({
        "id":false,
        "attributes": {
            "class":"modal_close",
            "onClick":"fadeOutBlackScreen();"
        },
        "texto":"X",
        "selector":true,
        "parent":document.querySelector("div#"+modal.id+" > div.modal_top"),
        "tag":"div"
    });
    criarElement({
        "id":false,
        "attributes": {
            "class":"modal_main",
        },
        "texto":objeto.main.texto,
        "parent":modal.id,
        "tag":"div"
    });
    setTimeout(function () {document.getElementById(objeto.idBlackScreen).classList.remove('fadeOutBlackScreen');}, 100);
    return modal.id;
}
function getPosition(element) {
	var elementOffSet = element.getBoundingClientRect();
    return { x: elementOffSet.x, y: elementOffSet.y };
}
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  function valida_CNPJ(cnpj){
	var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
	var dig1= new Number;
	var dig2= new Number;
	exp = /\.|\-|\//g
	cnpj = cnpj.toString().replace( exp, "" ); 
	var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

	for(i = 0; i<valida.length; i++) {
		dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
		dig2 += cnpj.charAt(i)*valida[i];
	}
	dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
	dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
	if(((dig1*10)+dig2) != digito) {
		return false;
	}
	return true;
}
function valida_CPF(strCPF) {
	if(strCPF == null) {
		return false;
	}
	var Soma;
	var Resto;
	Soma = 0;
	if (strCPF == "00000000000") {
		return false;
	}
	exp = /\.|\-|\//g
	strCPF = strCPF.toString().replace( exp, "" );
	for (i=1; i<=9; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	}
	Resto = (Soma * 10) % 11;
	if ((Resto == 10) || (Resto == 11)) {
		Resto = 0;
	}
	if (Resto != parseInt(strCPF.substring(9, 10)) ) {
		return false;
	}
	Soma = 0;
	for (i = 1; i <= 10; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	}
	Resto = (Soma * 10) % 11;
	if ((Resto == 10) || (Resto == 11)) {
		Resto = 0;
	}
	if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
		return false;
	}
	return true;
}

function changeAttributes(Objeto) {
	if (Objeto.selector == '' || Objeto.selector == null) {
		return;
	}
    var elemento = document.querySelector(Objeto.selector);
	if (Objeto.htmlText != null) {
		if (Objeto.htmlText == 'aguarde') {
			Objeto.htmlText = "<span class=\"spinner\"></span>Aguarde...";
		} else if (Objeto.htmlText == 'pensebem') {
			Objeto.htmlText = "<span class=\"pensebem\"></span>Pense bem...";
		} else if (Objeto.htmlText == 'procurando') {
			Objeto.htmlText = "<span class=\"spinner\"></span>Procurando...";
		} else if (Objeto.htmlText == 'buscando') {
			Objeto.htmlText = "<span class=\"spinner\"></span>Buscando...";
		} else if (Objeto.htmlText == 'calculando') {
			Objeto.htmlText = "<span class=\"spinner\"></span>Calculando...";
		} else if (Objeto.htmlText == 'autorizando') {
			Objeto.htmlText = "<span class=\"spinner\"></span>Autorizando...";
		}
        elemento.innerHTML = Objeto.htmlText;
	}
    if (Objeto.removeClass != null && Objeto.removeClass != '') {
        // !Objeto.removeClass precisa ser array com as classes
        elemento.classList.remove(...Objeto.removeClass);
	}
	if (Objeto.addClass != null && Objeto.addClass != '') {
        // !Objeto.addClass precisa ser array com as classes
        elemento.classList.add(...Objeto.addClass);
	}
	if (Objeto.attributes != null) {
		const attributes = Object.entries(Objeto.attributes);
		attributes.forEach(val => {
            if(val[0] == 'required') {
				if (val[1] == true) {
					$(Objeto.selector).prop('required', true);
				}
				else {
					$(Objeto.selector).prop('required', false);
					$(Objeto.selector).removeProp('required');
				}
			}
			else if(val[0] == 'disabled') {
				if (val[1] == true) {
					$(Objeto.selector).prop('disabled', true);
				}
				else {
					$(Objeto.selector).prop('disabled', false);
					$(Objeto.selector).removeProp('disabled');
				}
			}
			else if(val[1] == false) {
				elemento.removeAttribute(val[0]);
			}
			else {
				elemento.setAttribute(val[0], val[1]);
			}
		});
	}
	/*
	if (Objeto.readonly == true) {
		$(Objeto.selector).prop('readonly', true);
	}
	if (Objeto.readonly == false) {
		$(Objeto.selector).prop('readonly', false);
		$(Objeto.selector).removeProp('readonly');
	}
    */
	return;
}
function getCEP(cep) {
	$.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
		return(data);
	});
}
function UpperFirst(string) {
	if(string == null) {
		return '';
	}
	string = string?.toLowerCase();
	nomeFinal = [];
	const nomeArray = string.split(' ');
	var nomeTeste = '';
	nomeArray.forEach((elemento) => {
		nomeTeste = elemento.charAt(0).toUpperCase() + elemento.slice(1);
		if(nomeTeste == 'De') {
			nomeTeste = 'de';
		} else if(nomeTeste == 'E') {
			nomeTeste = 'e';
		}
		nomeFinal.push(nomeTeste);
	});
	return nomeFinal.join(' ');
}
function zeros(valor,zeros) {
	return String(valor).padStart(zeros, '0');
}
function nomeMes(mes) {
	if(mes == null) {
		return false;
	}
	if((mes * 1) == 1) {
		nomeMes = 'Janeiro';
	} else if((mes * 1) == 2) {
		nomeMes = 'Fevereiro';
	} else if((mes * 1) == 3) {
		nomeMes = 'Março';
	} else if((mes * 1) == 4) {
		nomeMes = 'Abril';
	} else if((mes * 1) == 5) {
		nomeMes = 'Maio';
	} else if((mes * 1) == 6) {
		nomeMes = 'Junho';
	} else if((mes * 1) == 7) {
		nomeMes = 'Julho';
	} else if((mes * 1) == 8) {
		nomeMes = 'Agosto';
	} else if((mes * 1) == 9) {
		nomeMes = 'Setembro';
	} else if((mes * 1) == 10) {
		nomeMes = 'Outubro';
	} else if((mes * 1) == 11) {
		nomeMes = 'Novembro';
	} else if((mes * 1) == 12) {
		nomeMes = 'Dezembro';
	}
	return nomeMes;
}
function serialize(form) {
    var result = [];
    var elementos = document.querySelectorAll('form#'+form+' *:not(button,div,label,p,reset,file,submit,h1,h2,h3,fieldset,legend,pre)');
    if(elementos == undefined) {
        return result;
    }
    for (var i = 0; i < elementos.length; i++) {
		if(elementos[i]?.attributes?.type?.nodeValue == 'checkbox') {
			if(elementos[i].checked == true) {
				result.push(encodeURIComponent(elementos[i].name)+'=on');
			}
		} else if(elementos.value != '') {
            result.push(encodeURIComponent(elementos[i].name)+'='+encodeURIComponent(elementos[i].value));
		}
    }
    return result.join('&').replace(/%20/g, '+');
};
function informaSucesso(texto,tempo) {
    new Promise((resolve,reject) => {
        var idInforma = criarElement({
            "attributes":{
                "class":"informaSucesso"
            },
            "textoHtml":texto,
            "selector":true,
            "parent":document.body,
            "tag":"div"
        });    
        resolve(idInforma.id);
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "addClass": ['showOff'],
            });
        },100);
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "removeClass": ['showOff'],
            });
        },(tempo + 100));
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            document.getElementById(idDivCriada).remove();
        },(tempo + 850));
    });
    return;
}
function informaErro(texto,tempo) {
    new Promise((resolve,reject) => {
        var idInforma = criarElement({
            "attributes":{
                "class":"informaErro"
            },
            "textoHtml":texto,
            "selector":true,
            "parent":document.body,
            "tag":"div"
        });    
        resolve(idInforma.id);
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "addClass": ['showOff'],
            });
        },100);
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "removeClass": ['showOff'],
            });
        },(tempo + 100));
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            document.getElementById(idDivCriada).remove();
        },(tempo + 850));
    });
    return;
}
function informaAtencao(texto,tempo) {
    new Promise((resolve,reject) => {
        var idInforma = criarElement({
            "attributes":{
                "class":"informaAtencao"
            },
            "textoHtml":texto,
            "selector":true,
            "parent":document.body,
            "tag":"div"
        });    
        resolve(idInforma.id);
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "addClass": ['showOff'],
            });
        },100);
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            changeAttributes({
                "selector": "div#"+idDivCriada,
                "removeClass": ['showOff'],
            });
        },(tempo + 100));
        return idDivCriada;
    }).then((idDivCriada) => {
        setTimeout(() => {
            document.getElementById(idDivCriada).remove();
        },(tempo + 850));
    });
    return;
}
function scrollToElement(target) {
	window.scroll(0, getPosition(document.querySelector(target)).y);
}
function fadeOutBlackScreen() {
    document.querySelector('div.blackScreen').classList.add('fadeOutBlackScreen');
    setTimeout("closeBlackScreen()", 600);
}
function closeBlackScreen() {
    document.querySelector('div.blackScreen').remove();
}