function editDica(idDica) {
	coringa('14', { idDica: idDica }).
		then(result => {
			dica = result.dicas[0]
			document.querySelector('section#main > div.principal').innerText = '';
			var divPrincipal = criarElement({
				attributes: {
					class: "novaDicaForm",
				},
				selector: true,
				parent: document.querySelector('section#main > div.principal'),
				tag: "div"
			})
			criarElement({
				id: false,
				textoHtml: `EDITANDO DICA N. ${dica.idDica}`,
				parent: divPrincipal.id,
				tag: "div"
			})
			criarElement({
				id: "editDicaForm",
				parent: divPrincipal.id,
				tag: "form"
			})
			criarElement({
				id: false,
				selector: true,
				parent: document.querySelector(`#${divPrincipal.id} > form`),
				tag: "fieldset"
			})
			criarElement({
				id: false,
				textoHtml: "grupo",
				selector: true,
				parent: document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				tag: "legend"
			})
			criarElement({
				id: false,
				attributes: {
					class: "form-control",
					name: "grupo",
				},
				selector: true,
				parent: document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				tag: "select"
			})
			var gruposEdit = grupos.split(', ')
			gruposEdit.shift()
			gruposEdit.forEach((grupo, key) => {
				criarElement({
					id: false,
					attributes: {
						value: (key + 1),
						selected: ((key + 1) == dica.grupo ? 'selected' : ''),
					},
					textoHtml: grupo,
					selector: true,
					parent: document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type select`),
					tag: "option"
				})
			})
			criarElement({
				"id": false,
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form`),
				"tag": "fieldset"
			});
			criarElement({
				"id": false,
				"textoHtml": "título",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "legend"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "form-control",
					"type": "text",
					"placeholder": "Título",
					"name": "titulo",
					"form-control": "notNull",
					"aria-label": "Título",
					"value": dica.titulo,
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "input"
			});
			criarElement({
				"id": false,
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form`),
				"tag": "fieldset"
			});
			criarElement({
				"id": false,
				"textoHtml": "Informações Gerais",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "legend"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "form-control",
					"placeholder": "Informações Gerais",
					"name": "informacoesgerais",
					"form-control": "notNull",
					"aria-label": "Informações",
				},
				"textoHtml": dica.informacoes,
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "textarea"
			});
			autosize(document.querySelector('textarea:last-of-type'))
			document.querySelector('textarea:last-of-type').addEventListener('keyup', (e) => {
				autosize(e.target)
			})
			criarElement({
				"id": false,
				"attributes": {
					"class": "linksDica",
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form`),
				"tag": "fieldset"
			});
			criarElement({
				"id": false,
				"textoHtml": "Links",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "legend"
			});
			criarElement({
				"id": "link",
				"attributes": {
					"class": "form-control",
					"type": "text",
					"placeholder": "Link para a dica",
					"name": "linkDica",
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "input"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "btn btn-sm btn-success",
					"type": "button",
				},
				"textoHtml": "Incluir",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "button"
			});
			document.querySelector('fieldset.linksDica button').addEventListener('click', (e) => {
				var linkInput = document.querySelector('fieldset.linksDica input[name=linkDica]')
				if (linkInput.value != '' && linkInput.value.match(/^(https:\/\/|http:\/\/)/)) {
					criarElement({
						"id": false,
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados`),
						"tag": "div"
					});
					criarElement({
						"id": false,
						"attributes": {
							"href": linkInput.value,
							"target": "_blank",
						},
						"textoHtml": linkInput.value,
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
						"tag": "a"
					});
					criarElement({
						"id": false,
						"attributes": {
						},
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
						"tag": "div"
					});
					document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type > div`).addEventListener('click', (e) => {
						e.target.parentElement.remove()
					})
					linkInput.value = '';
				}
			})
			criarElement({
				"id": false,
				"attributes": {
					"class": "linksVinculados",
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "div"
			});
			dica.links.forEach(link => {
				if (link != '') {
					criarElement({
						"id": false,
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados`),
						"tag": "div"
					});
					criarElement({
						"id": false,
						"attributes": {
							"href": link,
							"target": "_blank",
						},
						"textoHtml": link,
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
						"tag": "a"
					});
					criarElement({
						"id": false,
						"attributes": {
						},
						"selector": true,
						"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
						"tag": "div"
					});
					document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type > div`).addEventListener('click', (e) => {
						e.target.parentElement.remove()
					})
				}
			})
			criarElement({
				"id": false,
				"attributes": {
					"class": "validadeDica",
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form`),
				"tag": "fieldset"
			});
			criarElement({
				"id": false,
				"textoHtml": "Validade",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "legend"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "form-control",
					"type": "date",
					"name": "validadeDica",
					"value": dica.validade,
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
				"tag": "input"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "arquivosVinculados",
				},
				"target": "after",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset.validadeDica`),
				"tag": "fieldset"
			});
			criarElement({
				"id": false,
				"textoHtml": "arquivos vinculados",
				"selector": true,
				"parent": document.querySelector(`fieldset.arquivosVinculados`),
				"tag": "legend"
			});
			criarElement({
				"id": false,
				"selector": true,
				"parent": document.querySelector(`fieldset.arquivosVinculados`),
				"tag": "div"
			});
			var idInputFile = criarElement({
				"attributes": {
					"class": "form-control",
					"multiple": "1",
					"capture": "capture",
					"accept": "application/pdf,image/png,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,txt,.odt,.rtf,.jpg,.jpeg,.xls,.xlsx,.pps,.ppsx,.pptx,.csv,.ogg",
					"type": "file",
					"name": "upload",
				},
				"selector": true,
				"parent": document.querySelector(`fieldset.arquivosVinculados > div`),
				"tag": "input"
			})
			criarElement({
				"id": "arquivosvinculados",
				"selector": true,
				"parent": document.querySelector(`fieldset.arquivosVinculados`),
				"tag": "div"
			});
			arquivosVinculadosConstructor(dica.arquivosVinculados)
			criarElement({
				"id": false,
				"attributes": {
					"class": "btn btn-secondary",
					"type": "button",
				},
				"textoHtml": "Enviar",
				"selector": true,
				"parent": document.querySelector(`fieldset.arquivosVinculados > div`),
				"tag": "button"
			});
			var botaoEnviar = document.querySelector(`fieldset.arquivosVinculados > div button`)
			var filesInput = document.getElementById(`${idInputFile.id}`)
			filesInput.addEventListener('click', (e) => {
				if (e.target.files.length > 0) {
					botaoEnviar.classList.toggle('btn-secondary')
					botaoEnviar.classList.toggle('btn-success')
				} else {
					botaoEnviar.classList.toggle('btn-secondary')
					botaoEnviar.classList.toggle('btn-success')
					document.querySelector('progress#file_progress')?.remove()
				}
				botaoEnviar.innerHTML = 'Enviar'
			})
			filesInput.addEventListener('change', (e) => {
				if (e.target.files.length > 0) {
					botaoEnviar.classList.toggle('btn-secondary')
					botaoEnviar.classList.toggle('btn-success')
				} else {
					botaoEnviar.classList.toggle('btn-secondary')
					botaoEnviar.classList.toggle('btn-success')
					document.querySelector('progress#file_progress')?.remove()
				}
				botaoEnviar.innerHTML = 'Enviar'
			})
			botaoEnviar.addEventListener('click', (e) => {
				if (filesInput.files.length > 0) {
					if (document.querySelector('progress#file_progress') == null) {
						criarElement({
							"id": "file_progress",
							"attributes": {
								"type": "button",
								"value": 0.00001,
								"max": 100,
							},
							"textoHtml": "Enviar",
							"target": "after",
							"parent": idInputFile.id,
							"tag": "progress"
						})
					}
					var uri = "sendDicas.php";
					var xhr = new XMLHttpRequest();
					var ajaxData = new FormData();
					xhr.open("POST", uri, true);
					xhr.upload.addEventListener("progress", function (e) {
						if (e.lengthComputable) {
							document.getElementById('file_progress').value = Math.round((e.loaded * 100) / e.total);
						}
					}, false);
					xhr.upload.addEventListener("load", () => {
						filesInput.value = '';
						botaoEnviar.innerHTML = 'Enviado!';
						botaoEnviar.classList.add('btn-success');
						botaoEnviar.classList.remove('btn-secondary');
					}, false);
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4 && xhr.status == 200) {
							var result = JSON.parse(xhr.responseText);
							if (result.fail.length > 0) {
								var textoAtencao = [];
								result.fail.forEach(erroObject => {
									textoAtencao.push(`${erroObject.file} (${erroObject.erro})`)
								})
							}
							if (result.success > 0) {
								arquivosVinculadosConstructor(result.arquivosVinculados)
								informaSucesso(`Upload com sucesso de ${result.success} arquivo${(result.success > 1 ? 's' : '')}`, 4000)
							}
						}
					};
					Object.entries(filesInput.files).forEach(([key, val]) => {
						ajaxData.append(key, val);
					});
					ajaxData.append('idDica', idDica);
					xhr.send(ajaxData);
				}
			})
			criarElement({
				"id": false,
				"attributes": {
					"class": "botoesOpcoes",
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form`),
				"tag": "div"
			});
			criarElement({
				"id": false,
				"attributes": {
					"class": "btn btn-success",
					"type": "submit",
				},
				"textoHtml": "Salvar Alterações",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > div:last-of-type`),
				"tag": "button"
			});
			document.querySelector('form#editDicaForm').addEventListener('submit', e => {
				e.preventDefault()
				document.querySelector('div.alertaErros')?.remove()
				var linksIncluidos = []
				document.querySelectorAll('div.linksVinculados > div').forEach(element => {
					linksIncluidos.push(element.children[0].getAttribute('href'))
				})
				var erros = formControl('editDicaForm')
				if (erros.length > 0) {
					alertErros({ "erros": erros, "selectorTarget": "#editDicaForm" })
				} else {
					var instrucoes = {
						"idDica": idDica,
						"grupo": document.querySelector('select[name=grupo]').value,
						"titulo": document.querySelector('input[name=titulo]').value,
						"informacoes": document.querySelector("#editDicaForm textarea").value,
						"links": JSON.stringify(linksIncluidos),
						"validade": document.querySelector('input[name=validadeDica]').value,
					}
					coringa('15', instrucoes).
						then((result) => {
							if (result.erros == false) {
								informaSucesso('Dica alterada com sucesso', 2000)
							} else {
								informaErro('Erro ao tentar editar a dica', 3000)
							}
						})
				}
			})
			var excluirButton = criarElement({
				"attributes": {
					"class": "btn btn-danger",
					"type": "button",
				},
				"textoHtml": "Excluir Dica",
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} > form > div:last-of-type`),
				"tag": "button"
			});
			document.getElementById(excluirButton.id).addEventListener('click', e => {
				e.target.classList.remove('btn-danger')
				e.target.classList.add('btn-warning')
				e.target.innerHTML = '<span class=\'spinner\'></span> Aguarde...'
				// e.target.style.color = 'white'
				setTimeout(() => {
					// e.target.parentElement.firstElementChild.remove()
					e.target.innerHTML = 'Operação IRREVERSÍVEL. Tens certeza?'
					e.target.classList.add('btn-danger')
					e.target.classList.remove('btn-warning')
					document.querySelector('button[confirma=sim]')?.remove()
					criarElement({
						"attributes": {
							"class": "btn btn-warning",
							"type": "button",
							"confirma": "sim",
						},
						"textoHtml": "Sim, excluir!",
						"selector": true,
						"parent": document.querySelector(`div.botoesOpcoes`),
						"tag": "button"
					});
					document.querySelector('button[confirma=sim]').addEventListener('click', ele => {
						document.querySelector('div.botoesOpcoes').innerHTML = '';
						criarElement({
							"attributes": {
								"class": "btn btn-primary",
								"type": "button",
								"excluindo": "excluindo",
							},
							"textoHtml": "Excluindo arquivos...",
							"selector": true,
							"parent": document.querySelector(`div.botoesOpcoes`),
							"tag": "button"
						});
						async function chamaNaOrdem() {
							await coringa('16', { "idDica": idDica }).
								then(result => {
									// result = JSON.parse(result);
									if (result.diretorio == false) {
										document.querySelector('button[excluindo]').innerHTML = 'Excluindo informações...'
									}
									return idDica
								})
							await coringa('17', { "idDica": idDica, }).
								then(result => {
									// result = JSON.parse(result);
									if (result.erros == false) {
										document.querySelector('section#main > div.principal').innerHTML = '';
										informaSucesso('Dica excluída com sucesso', 2000)
									}
								})
						}
						chamaNaOrdem();
					})
					document.querySelector('button[confirma=cancelar]')?.remove()
					criarElement({
						"attributes": {
							"class": "btn btn-success",
							"type": "button",
							"confirma": "cancelar",
						},
						"textoHtml": "Não, cancelar!",
						"selector": true,
						"parent": document.querySelector(`div.botoesOpcoes`),
						"tag": "button"
					});
					document.querySelector('button[confirma=cancelar]').addEventListener('click', el => {
						document.querySelector('button[confirma=sim]')?.remove()
						document.querySelector('button[confirma=cancelar]')?.remove()
						e.target.innerHTML = 'Excluir Dica'
						e.target.classList.add('btn-danger')
						e.target.classList.remove('btn-warning')
					})
				}, 500);
			})
		})
	return
}
function buscarDicas() {
	document.querySelector('section#main > div.principal').innerHTML = '';
	var divPrincipal = criarElement({
		"attributes": {
			"class": "buscaDicaForm",
		},
		"selector": true,
		"parent": document.querySelector('section#main > div.principal'),
		"tag": "div"
	})
	criarElement({
		"id": false,
		"parent": divPrincipal.id,
		"tag": "fieldset"
	})
	criarElement({
		"id": false,
		"textoHtml": "Busca Documento ou Dica",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > fieldset`),
		"tag": "legend"
	})
	criarElement({
		"id": "buscaDicaForm",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > fieldset`),
		"tag": "form"
	})
	criarElement({
		"id": false,
		"textoHtml": "Escolha um grupo",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} form`),
		"tag": "label"
	})
	criarElement({
		"id": false,
		"attributes": {
			"name": "grupo",
			"class": "form-control",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} form`),
		"tag": "select"
	})
	var gruposBusca = grupos.split(', ');
	gruposBusca[0] = 'Todos';
	gruposBusca.forEach((grupoName, key) => {
		criarElement({
			"id": false,
			"attributes": {
				"value": key,
			},
			"textoHtml": grupoName,
			"selector": true,
			"parent": document.querySelector(`#${divPrincipal.id} select`),
			"tag": "option"
		})
	})
	criarElement({
		"id": false,
		"attributes": {
			"type": "submit",
			"class": "btn btn-primary",
		},
		"textoHtml": "Buscar",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} form`),
		"tag": "button"
	})
	// ! results
	criarElement({
		"id": false,
		"attributes": {
			"class": "resultsDicas",
		},
		"selector": true,
		"parent": document.querySelector('section#main > div.principal'),
		"tag": "div"
	})
	document.querySelector('form#buscaDicaForm').addEventListener('submit', e => {
		e.preventDefault()
		coringa('14', { "grupo": document.querySelector('form#buscaDicaForm select').value }).
			then((result) => {
				// result = JSON.parse(result)
				document.querySelector('div.resultsDicas').innerText = ''
				if (result.dicas.length > 0) {
					// ! results TOPICS
					criarElement({
						"id": false,
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "ID",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "GRUPO",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "TÍTULO",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "INFORMAÇÕES",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "INCLUSÃO",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "VALIDADE",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": "ARQ.",
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
				}
				result.dicas.forEach((dica, key) => {
					criarElement({
						"id": false,
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas'),
						"tag": "div"
					})
					document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type').addEventListener('click', (e) => {
						editDica(floatValor(e.currentTarget.firstElementChild.innerText))
					})
					criarElement({
						"id": false,
						"textoHtml": zeros(dica.idDica, 2),
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": grupos.split(', ')[dica.grupo],
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": dica.titulo,
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": dica.informacoes,
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": dica.inclusao.substring(1, 10).split('-').reverse().join('-'),
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": dica.validade.split('-').reverse().join('-'),
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
					criarElement({
						"id": false,
						"textoHtml": (dica.arquivosVinculados.length == 0 ? '' : zeros(dica.arquivosVinculados.length, 2)),
						"selector": true,
						"parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
						"tag": "div"
					})
				})
			})
	})
	return
}
function classeIconImagem(extensao) {
	extensao = extensao.toLowerCase();
	if (['doc', 'docx', 'odt'].includes(extensao)) {
		classeIcon = 'icon-file-word'
	} else if (['xls', 'xlsx'].includes(extensao)) {
		classeIcon = 'icon-file-excel'
	} else if (extensao == 'ogg') {
		classeIcon = 'icon-file-ogg'
	} else if (extensao == 'csv') {
		classeIcon = 'icon-file-csv'
	} else if (extensao == 'rtf') {
		classeIcon = 'icon-file-rtf'
	} else if (extensao == 'pdf') {
		classeIcon = 'icon-file-pdf'
	} else if (extensao == 'txt') {
		classeIcon = 'icon-file-txt'
	} else if (['jpg', 'jpeg'].includes(extensao)) {
		classeIcon = 'icon-file-imagem'
	} else if (extensao == 'png') {
		classeIcon = 'icon-file-imagem'
	} else if (['ppt', 'pptx', 'pps'].includes(extensao)) {
		classeIcon = 'icon-file-powerpoint'
	} else {
		classeIcon = 'icon-file-geral'
	}
	return classeIcon
}
function arquivosVinculadosConstructor(arquivosVinculados) {
	document.querySelector("#arquivosvinculados").innerHTML = ''
	arquivosVinculados.forEach(arquivoVinculado => {
		var caminhoSplit = arquivoVinculado.split('/')
		var arquivo = caminhoSplit[caminhoSplit.length - 1]
		var arquivoSplit = arquivo.split('.')
		var extensao = arquivoSplit[arquivoSplit.length - 1]
		var novoCaminho = []
		caminhoSplit.forEach((parteCaminho, key) => {
			if (key > 4) {
				novoCaminho.push(parteCaminho)
			}
		});
		var idCard = criarElement({
			"attributes": {
				"class": "flip-card",
			},
			"selector": true,
			"parent": document.querySelector("#arquivosvinculados"),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "inner-card",
			},
			"selector": true,
			"parent": document.querySelector(`#${idCard.id}`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "front-card",
			},
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.inner-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": `icon-file ${classeIconImagem(extensao)}`,
			},
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.front-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.front-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"href": `https://portal.grupofirstrh.com.br/${novoCaminho.join('/')}`,
				"download": arquivo,
				"target": "_blank",
			},
			"textoHtml": arquivo,
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.front-card > div:last-of-type`),
			"tag": "a"
		});
		criarElement({
			"attributes": {
				"class": "deleteFile",
			},
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.front-card`),
			"tag": "div"
		});
		// ! Confirmação de Exclusão
		criarElement({
			"id": false,
			"attributes": {
				"class": "back-card",
			},
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.inner-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"selector": true,
			"textoHtml": "Confirma Exclusão?",
			"parent": document.querySelector(`#${idCard.id} div.back-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.back-card`),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "btn btn-secondary btn-sm",
				"type": "button",
			},
			"textoHtml": "Sim",
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.back-card > div:last-of-type`),
			"tag": "button"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "btn btn-secondary btn-sm",
				"type": "button",
			},
			"textoHtml": "Não",
			"selector": true,
			"parent": document.querySelector(`#${idCard.id} div.back-card > div:last-of-type`),
			"tag": "button"
		});
		document.querySelector(`#${idCard.id} div.front-card div.deleteFile`).addEventListener('click', e => {
			e.target.parentElement.parentElement.classList.add('exclusao');
		})
		document.querySelector(`#${idCard.id} div.back-card button:nth-of-type(2)`).addEventListener('click', e => {
			e.target.parentElement.parentElement.parentElement.classList.remove('exclusao');
		})
		document.querySelector(`#${idCard.id} div.back-card button:nth-of-type(1)`).addEventListener('click', e => {
			e.target.nextElementSibling.remove();
			e.target.parentElement.previousElementSibling.remove();
			e.target.classList.add('excluindo');
			e.target.innerHTML = 'Excluindo...';
			criarElement({
				"id": false,
				"attributes": {
					"class": "spinner",
				},
				"posicao": "prepend",
				"selector": true,
				"parent": e.target,
				"tag": "span"
			});
			coringa('12', {
				"file": arquivoVinculado,
			}).
				then((result) => {
					// result = JSON.parse(result)
					if (result.exclusao == true) {
						document.querySelector(`#${idCard.id}`).classList.add('fadeOutDown')
						setTimeout(() => {
							document.querySelector(`#${idCard.id}`).remove();
						}, 750)
					} else {
						informaAtencao('Não foi possível excluir o arquivo', 2500)
					}
				})
		})
	})
}
var menuUsuarios = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(1)');
menuUsuarios?.addEventListener('click', () => {
	var element = document.querySelector("section#main > div.menu > div.usuarios > div:nth-of-type(2)");
	var NovoTamanho = ((element.childNodes.length - 1) / 2) * tamanhoPadraoSubMenu;
	var ComputedHeight = getComputedStyle(element).height;
	if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
		element.style.height = NovoTamanho + 'px';
	} else {
		element.style.height = '0px';
	}
	var usuariosPortalAdmin = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(1)');
	usuariosPortalAdmin?.addEventListener('click', () => {
		document.querySelector('section#main > div.principal').innerHTML = '';
		var divPrincipal = criarElement({
			"selector": true,
			"parent": document.querySelector('section#main > div.principal'),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "usuariosListados",
			},
			"parent": divPrincipal.id,
			"tag": "div"
		});
		criarElement({
			"id": false,
			"textoHtml": "Usuários do Portal Administrativo:",
			"selector": true,
			"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
			"tag": "h1"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "listaUsuarios",
			},
			"selector": true,
			"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
			"tag": "ul"
		});
		/*coringa('3', {})
			.then((retorno) => {
				Object.entries(retorno).forEach(([key, value]) => {
					var obj = JSON.stringify({ "cpf": value.cpf });
					criarElement({
						"id": false,
						"attributes": {
							"class": (value.status != 0 ? 'inativo' : '') + ' hand',
						},
						"textoHtml": value.nomeCompleto,
						"selector": true,
						"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul'),
						"tag": "li"
					});
					document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul > li:last-of-type').addEventListener('click', e => {
						coringa('4', `${obj}`).
							then(result => {
								exibeUsuarioForm(result)
							})
					})
				});
			}) */
	})
	var usuariosPortalDepRH = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(2)');
	usuariosPortalDepRH?.addEventListener('click', () => {
		document.querySelector('section#main > div.principal').innerHTML = '';
		var divPrincipal = criarElement({
			"selector": true,
			"parent": document.querySelector('section#main > div.principal'),
			"tag": "div"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "usuariosListados",
			},
			"parent": divPrincipal.id,
			"tag": "div"
		});
		criarElement({
			"id": false,
			"textoHtml": "Usuários Portal Departamento de RH:",
			"selector": true,
			"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
			"tag": "h1"
		});
		criarElement({
			"id": false,
			"attributes": {
				"class": "listaUsuarios",
			},
			"selector": true,
			"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
			"tag": "ul"
		});
		coringa('6', {})
			.then((retorno) => {
				Object.entries(retorno).forEach(([key, value]) => {
					var obj = JSON.stringify({ "cpf": value.cpf });
					criarElement({
						"id": false,
						"attributes": {
							"class": (value.status != 0 ? 'inativo' : '') + ' hand',
						},
						"textoHtml": value.nomeCompleto,
						"selector": true,
						"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul'),
						"tag": "li"
					});
					document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul > li:last-of-type').addEventListener('click', e => {
						coringa('7', `${obj}`).
							then(result => {
								exibeUsuarioForm(result)
							})
					})
				});
			})
	})
	var novoUsuario = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(3)');
	novoUsuario?.addEventListener('click', () => {
		document.querySelector('section#main > div.principal').innerHTML = '';
		coringa('18', {}).
			then(result => {
				// console.table(result.infoUser)
				if (result.infoUser.criarAdmin == 0 && result.infoUser.criarDeprh == 0) {
					return
				} else {
					var divPrincipal = criarElement({
						"selector": true,
						"parent": document.querySelector('section#main > div.principal'),
						"tag": "div"
					});
					criarElement({
						"id": false,
						"attributes": {
							"class": "criacaoNovoUsuario",
						},
						"parent": divPrincipal.id,
						"tag": "div"
					});
					criarElement({
						"id": false,
						"textoHtml": "Criar novo usuário:",
						"selector": true,
						"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
						"tag": "h1"
					});
					criarElement({
						"id": false,
						"selector": true,
						"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
						"tag": "div"
					});
					if (result.infoUser.criarAdmin == 1) {
						criarElement({
							"id": "novoUserAdmin",
							"attributes": {
								"type": "button",
								"class": "btn btn-dark",
							},
							"textoHtml": "PARA O PORTAL ADMINISTRATIVO",
							"selector": true,
							"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > div:first-of-type'),
							"tag": "button"
						});
						var novoUsuarioAdmin = document.getElementById('novoUserAdmin');
						novoUsuarioAdmin?.addEventListener('click', () => {
							novoUsuarioForm({ "tabela": "admin" });
						})
					}
					if (result.infoUser.criarDeprh == 1) {
						criarElement({
							"id": "novoUserDeprh",
							"attributes": {
								"type": "button",
								"class": "btn btn-dark",
							},
							"textoHtml": "PARA O PORTAL DO DEP. DE RH",
							"selector": true,
							"parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > div:first-of-type'),
							"tag": "button"
						});
						var novoUsuarioDeprh = document.getElementById('novoUserDeprh');
						novoUsuarioDeprh?.addEventListener('click', () => {
							novoUsuarioForm({ "tabela": "deprh" });
						})
					}
				}
			})
	})
})

var menuWebsite = document.querySelector("#main > div.menu > div.site > div:nth-of-type(1)");
menuWebsite?.addEventListener('click', () => {
	document.querySelector('section#main > div.principal').innerHTML = '';
	var divPrincipal = criarElement({
		"textoHtml": "Faremos o desenvolvimento dessa funcionalidade oportunamente.",
		"selector": true,
		"parent": document.querySelector('section#main > div.principal'),
		"tag": "div"
	});
})
var menuDicas = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(1)");
menuDicas?.addEventListener('click', () => {
	var element = document.querySelector("section#main > div.menu > div.admin > div:nth-of-type(2)");
	var NovoTamanho = ((element.childNodes.length - 1) / 2) * tamanhoPadraoSubMenu;
	var ComputedHeight = getComputedStyle(element).height;
	if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
		element.style.height = NovoTamanho + 'px';
	} else {
		element.style.height = '0px';
	}
})
var novaDicaButton = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(2) > div:nth-of-type(1)");
novaDicaButton?.addEventListener('click', () => {
	document.querySelector('section#main > div.principal').innerHTML = '';
	var divPrincipal = criarElement({
		"attributes": {
			"class": "novaDicaForm",
		},
		"selector": true,
		"parent": document.querySelector('section#main > div.principal'),
		"tag": "div"
	});
	criarElement({
		"id": false,
		"textoHtml": "CRIANDO NOVO COMUNICADO (DOCUMENTO OU DICA) AO COLABORADOR",
		"parent": divPrincipal.id,
		"tag": "div"
	});
	criarElement({
		"id": "novaDicaForm",
		"parent": divPrincipal.id,
		"tag": "form"
	});
	criarElement({
		"id": false,
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "fieldset"
	});
	criarElement({
		"id": false,
		"textoHtml": "grupo",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "legend"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "form-control",
			"name": "grupo",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "select"
	});
	grupos.split(', ').forEach((grupo, key) => {
		criarElement({
			"id": false,
			"attributes": {
				"value": key,
			},
			"textoHtml": grupo,
			"selector": true,
			"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type select`),
			"tag": "option"
		});
	})
	criarElement({
		"id": false,
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "fieldset"
	});
	criarElement({
		"id": false,
		"textoHtml": "título",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "legend"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "form-control",
			"type": "text",
			"placeholder": "Título",
			"name": "titulo",
			"form-control": "notNull",
			"aria-label": "Título"
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "input"
	});
	criarElement({
		"id": false,
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "fieldset"
	});
	criarElement({
		"id": false,
		"textoHtml": "Informações Gerais",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "legend"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "form-control",
			"placeholder": "Informações Gerais",
			"name": "informacoesgerais",
			"form-control": "notNull",
			"aria-label": "Informações"
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "textarea"
	});
	document.querySelector('textarea:last-of-type').addEventListener('keyup', (e) => {
		autosize(e.target)
	})
	criarElement({
		"id": false,
		"attributes": {
			"class": "linksDica",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "fieldset"
	});
	criarElement({
		"id": false,
		"textoHtml": "Links",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "legend"
	});
	criarElement({
		"id": "link",
		"attributes": {
			"class": "form-control",
			"type": "text",
			"placeholder": "Link para a dica",
			"name": "linkDica",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "input"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "btn btn-sm btn-success",
			"type": "button",
		},
		"textoHtml": "Incluir",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "button"
	});
	document.querySelector('fieldset.linksDica button').addEventListener('click', (e) => {
		var linkInput = document.querySelector('fieldset.linksDica input[name=linkDica]')
		if (linkInput.value != '' && linkInput.value.match(/^(https:\/\/|http:\/\/)/)) {
			criarElement({
				"id": false,
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados`),
				"tag": "div"
			});
			criarElement({
				"id": false,
				"attributes": {
					"href": linkInput.value,
					"target": "_blank",
				},
				"textoHtml": linkInput.value,
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
				"tag": "a"
			});
			criarElement({
				"id": false,
				"attributes": {
				},
				"selector": true,
				"parent": document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type`),
				"tag": "div"
			});
			document.querySelector(`#${divPrincipal.id} fieldset.linksDica > div.linksVinculados > div:last-of-type > div`).addEventListener('click', (e) => {
				e.target.parentElement.remove()
			})
			linkInput.value = '';
		}
	})
	criarElement({
		"id": false,
		"attributes": {
			"class": "linksVinculados",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "div"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "validadeDica",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "fieldset"
	});
	criarElement({
		"id": false,
		"textoHtml": "Validade",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "legend"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "form-control",
			"type": "date",
			"name": "validadeDica",
		},
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
		"tag": "input"
	});
	criarElement({
		"id": false,
		"attributes": {
			"class": "btn btn-success",
			"type": "submit",
		},
		"textoHtml": "Criar Dica",
		"selector": true,
		"parent": document.querySelector(`#${divPrincipal.id} > form`),
		"tag": "button"
	});
	document.querySelector('#novaDicaForm').addEventListener('submit', (e) => {
		e.preventDefault()
		document.querySelector('div.alertaErros')?.remove()
		var linksIncluidos = []
		document.querySelectorAll('div.linksVinculados > div').forEach(element => {
			linksIncluidos.push(element.children[0].getAttribute('href'))
		})
		var erros = formControl('novaDicaForm')
		if (document.querySelector('select[name=grupo]').value == 'Escolha') {
			erros.push(['Informe o grupo'])
		}
		if (erros.length > 0) {
			document.querySelector('div.alertaErros')?.remove()
			alertErros({ "erros": erros, "selectorTarget": "#novaDicaForm" })
		} else {
			var instrucoes = {
				"idDica": (document.querySelector('input[name=idDica]')?.value ? document.querySelector('input[name=idDica]').value : ''),
				"grupo": document.querySelector('select[name=grupo]').value,
				"titulo": document.querySelector('input[name=titulo]').value,
				"informacoes": document.querySelector("#novaDicaForm textarea").value,
				"links": linksIncluidos.join('##'),
				"validade": document.querySelector('input[name=validadeDica]').value,
			}
			coringa('11', instrucoes).
				then((result) => {
					// result = JSON.parse(result)
					if (result.erros == false) {
						var textoSucesso = 'Dica criada com sucesso'
						informaSucesso(textoSucesso, 2000)
						editDica(result.idDica)
					} else {
						informaErro('Erro ao tentar criar a dica', 3000)
					}
					return
				})
		}
	})
})
var pesquisarDicas = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(2) > div:nth-of-type(2)");
pesquisarDicas?.addEventListener('click', () => {
	buscarDicas()
})
var sair = document.querySelector('section#header > div:nth-of-type(2)');
sair?.addEventListener('click', () => {
	coringa('2', {}).then(() => {
		window.location = '../';
	})
})
/* window.addEventListener("load", () => {
	coringa('1', {})
		.then((nomeUsuario) => {
			if (nomeUsuario == '' || !nomeUsuario) {
				window.location = '../';
			} else if (nomeUsuario != '') {
				// nomeUsuario = JSON.parse(nomeUsuario);
				document.querySelector('section#header > div:nth-of-type(1) > div:nth-of-type(2)').innerHTML = UpperFirst(nomeUsuario);
			}
		})
		.then((retorno) => {
			if (retorno != '') {
				changeAttributes({
					"selector": "section#header > div:nth-of-type(1) > div:nth-of-type(2)",
					"addClass": ['logado'],
				});
			}
		})
}) */
