// ULTIMO - 15
async function coringa(codigo, instrucoes) {
	var instrucoesEnviadas = '';
	if(instrucoes != null) {
		if(typeof(instrucoes) == 'string') {
			instrucoes = JSON.parse(instrucoes);
		}
		for (const [key, value] of Object.entries(instrucoes)) {
			instrucoesEnviadas += '&'+encodeURIComponent(key)+'='+encodeURIComponent(value);
		}
	}
	var extra = '';
	if (['3','6','7','9','11','17'].includes(codigo)) {
		var form = document.getElementById(instrucoes.nomeFormulario);
		form.addEventListener('submit', (event) => {
			if (event) { event.preventDefault(); }
		}, false);
		extra = "&"+serialize(instrucoes.nomeFormulario);
		if(codigo == '9') {
			const novaSenhaUsuario = document.getElementById('novaSenhaUsuario').value;
			if(novaSenhaUsuario != '') {
				changeAttributes({
					"selector": "input#novaSenhaUsuario",
					"attributes": {
						"form-control":"caracteres8"
					},
				});
			}
			var controle = formControl(alteracaoSenhaForm.id, 'respostaPadroes2');
			document.getElementById('respostaPadroes2').innerHTML = '';
			if(controle.length > 0) {
				window.location = '#respostaPadroes2';
				alertErros({
					"selectorTarget":"div#respostaPadroes2",
					"erros":controle
				})
				return;
			}
		}
		if(codigo == '11') {
			document.getElementById('retornoErro').innerHTML = '';
			let erros = formControl(instrucoes.nomeFormulario);
			if(erros.length > 0) {
				document.getElementById('retornoErro').innerHTML = '';
				alertErros({
					"selectorTarget":"div#retornoErro",
					"erros":erros,
				});
				return;
			}
			if(instrucoes.gerarSenha != null) {
				extra += '&gerarSenha=1';
			}
		}
	} else if(codigo == 10) {
		document.getElementById('retornoErro').innerHTML = '';
		if(soNumeros(instrucoes.cpf).length == 11) {
			if(!valida_CPF(instrucoes.cpf)) {
				changeAttributes({
					"selector": "button#salvarAlteracoes",
					"removeClass": ['btn-success','btn-secondary'],
					"addClass": ['nohand', 'btn-secondary'],
					"attributes": {
						"onclick":false,
						"type":"button",
					},
				});
				changeAttributes({
					"selector": "button#enviarNovaSenha",
					"removeClass": ['btn-warning','btn-secondary'],
					"addClass": ['nohand', 'btn-secondary'],
					"attributes": {
						"onclick":false,
					},
				});
				alertErros({
					"selectorTarget":"div#retornoErro",
					"erros":["CPF é válido, mas não existe em nossa base de dados"],
				});                
				return;
			}
		}
		else {
			changeAttributes({
				"selector": "button#salvarAlteracoes",
				"removeClass": ['btn-success','btn-secondary'],
				"addClass": ['nohand', 'btn-secondary'],
				"attributes": {
					"onclick":false,
					"type":"button",
				},
			});
			changeAttributes({
				"selector": "button#enviarNovaSenha",
				"removeClass": ['btn-warning','btn-secondary'],
				"addClass": ['nohand', 'btn-secondary'],
				"attributes": {
					"onclick":false,
				},
			});
			return;
		}
	} else if(codigo == 15) {
		changeAttributes({
			"selector": "button#autorizar_"+instrucoes.idUsuario,
			"attributes":{
				"style":"display:flex;",
				"onclick":false,
			},
			"addClass":['nohand'],
			"htmlText":"autorizando",
		});
	}
	return new Promise((resolve, reject) => {
		// console.log(extra);
		// console.log(codigo);
		// console.log(instrucoesEnviadas);
		if(codigo == '8') {
			var	files = document.getElementById('fileUpload').files;
			var periodo = document.getElementById('periodo').value;
			document.getElementById('pb').style.width = '0';
			document.getElementById('pt').innerHTML = '';
				var uri = "folhaPontoSendFiles.php";
				var xhr = new XMLHttpRequest();
				var ajaxData = new FormData();
				
				xhr.open("POST", uri, true);
				xhr.upload.addEventListener("progress", function(e) {
					if (e.lengthComputable) {
						var percentage = Math.round((e.loaded * 100) / e.total);
						document.getElementById('pb').style.width = percentage+'%';
						document.getElementById('pt').innerHTML = percentage+'%';
					}
				}, false);
				xhr.upload.addEventListener("load", () => {
					document.getElementById('pt').innerHTML = '100%';
				}, false);
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						document.getElementById('pt').innerHTML = 'Enviado!';
						// var nomeArquivo = xhr.responseText;
						resolve(xhr.responseText);
					}
				};
				Object.entries(files).forEach(([key, val]) => {
					ajaxData.append(key, val);
				});
			ajaxData.append('periodo', periodo);
			xhr.send(ajaxData);
			return;
		}
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
		// console.log(codigo);
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				if(codigo == 10) {
					if(xmlhttp.responseText != '') {
						var retornado = JSON.parse(xmlhttp.responseText);
						if(retornado == '') {
							alertErros({
								"selectorTarget":"div#retornoErro",
								"erros":["CPF é válido, mas não existe em nossa base de dados"],
							});
							changeAttributes({
								"selector": "button#salvarAlteracoes",
								"removeClass": ['btn-success','btn-secondary'],
								"addClass": ['nohand', 'btn-secondary'],
								"attributes": {
									"onclick":false,
									"type":"button",
								},
							});
							changeAttributes({
								"selector": "button#enviarNovaSenha",
								"removeClass": ['btn-warning','btn-secondary'],
								"addClass": ['nohand', 'btn-secondary'],
								"attributes": {
									"onclick":false,
								},
							});
						} else {
							changeAttributes({
								"selector": "button#salvarAlteracoes",
								"removeClass": ['nohand', 'btn-secondary'],
								"addClass": ['btn-success'],
								"attributes": {
									"onclick":"coringa('11',"+JSON.stringify({"nomeFormulario":"editandoInformacoesEmpregadoForm"})+");",
									"type":"submit",
								},
							});
							changeAttributes({
								"selector": "button#enviarNovaSenha",
								"removeClass": ['nohand', 'btn-secondary'],
								"addClass": ['btn-warning'],
								"attributes": {
									"onclick":"coringa('11',"+JSON.stringify({"nomeFormulario":"editandoInformacoesEmpregadoForm","gerarSenha":1})+");",
								},
							});                            
							document.getElementById('nomeEmpregado').value = retornado.nomeCompleto;
							document.getElementById('emailEmpregado').value = retornado.email;
							if(retornado.status == 1) {
								document.getElementById('suspenderEmpregado').checked = true;
							}
						}
					}
					// console.log(xmlhttp.responseText);
				} else if(codigo == 11) {
					// document.getElementById('retornoErro').innerHTML = xmlhttp.responseText;
					var retorno = JSON.parse(xmlhttp.responseText);
					if(retorno.erros.length > 0) {
						document.getElementById('retornoErro').innerHTML = '';
						alertErros({
							"selectorTarget":"div#retornoErro",
							"erros":retorno.erros,
						});
					} else {
						if(retorno.senhaEnviada == 'S') {
							informaSucesso('Dados salvos, senha gerada e enviada para o e-mail informado',2500);
						} else {
							informaSucesso('Dados salvos',1800);
						}
					}
				} else if(codigo == 14) {
					document.getElementById('nome_id_'+xmlhttp.responseText).remove();
				} else if(codigo == 15) {
					var obj = JSON.parse(xmlhttp.responseText);
					if(obj?.retorno == true && obj?.idUsuario != '') {
						coringa('13',{})
						.then((retorno) => {
							const notificacoes = JSON.parse(retorno);
							document.querySelector('section#header > div:nth-of-type(1) > span').innerHTML = zeros(notificacoes.length,2);
						})
						document.querySelector('div#nome_id_'+obj.idUsuario+' > div:first-of-type').innerHTML = 'Autorizado! Senha do empregado enviada para o e-mail cadastrado.';
						document.getElementById('autorizar_'+obj.idUsuario).remove();
						document.getElementById('excluir_'+obj.idUsuario).remove();
						setTimeout(() => {
							document.getElementById('nome_id_'+obj.idUsuario).remove();
						},6000)
					}
				}
				resolve(xmlhttp.responseText);
			}
		}
		xmlhttp.open("POST","processadorAjax.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("action=superCoringa&codigo="+codigo+extra+instrucoesEnviadas);
	});
}