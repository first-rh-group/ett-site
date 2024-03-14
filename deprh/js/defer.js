function exibeNotificacoes() {
	coringa('13',{})
	.then((retorno) => {
		const notificacoes = JSON.parse(retorno);
		document.querySelector('section#header > div:nth-of-type(1) > span').innerHTML = zeros(notificacoes.length,2);
		return(notificacoes)
	})
	.then((notificacoes) => {
		var idBlackScreen = blackScreen();
		setTimeout(function () {document.getElementById(idBlackScreen).classList.remove('fadeOutBlackScreen');}, 100);
		criarElement({
			"id":false,
			"attributes":{
				"class":"notificacoes"
			},
			"parent":idBlackScreen,
			"tag":"div"
		});
		criarElement({
			"id":false,
			"textoHtml":"X",
			"selector":true,
			"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes'),
			"tag":"div"
		});
		var textoNotificacoes = "Você possui "+zeros(notificacoes.length,2)+" notificaç"+(notificacoes.length > 1 ? "ões" : "ão");
		var textoNotificacoes = (notificacoes.length == 0 ? 'Você não possui notificações' : textoNotificacoes);
		criarElement({
			"id":false,
			"textoHtml":textoNotificacoes,
			"selector":true,
			"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes'),
			"tag":"div"
		});
		notificacoes.forEach(element => {
			criarElement({
				"id":"nome_id_"+element.id,
				"selector":true,
				"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes'),
				"tag":"div"
			});
			criarElement({
				"id":false,
				"textoHtml":element.nomeCompleto+" está pedindo autorização para o primeiro acesso",
				"selector":true,
				"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes > div:last-of-type'),
				"tag":"div"
			});
			criarElement({
				"id":"autorizar_"+element.id,
				"attributes":{
					"class":"btn btn-success btn-sm",
					"onclick":"coringa('15','"+JSON.stringify({"idUsuario":element.id})+"');",
				},
				"textoHtml":"Autorizar",
				"selector":true,
				"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes > div:last-of-type'),
				"tag":"button"
			});
			criarElement({
				"id":"excluir_"+element.id,
				"attributes":{
					"class":"btn btn-danger btn-sm",
					"onclick":"excluirNome('excluir_"+element.id+"');",
				},
				"textoHtml":"Excluir",
				"selector":true,
				"parent":document.querySelector('div#'+idBlackScreen+' > div.notificacoes > div:last-of-type'),
				"tag":"button"
			});
		})
		const closeButton = document.querySelector('div.notificacoes > div:first-of-type');
		closeButton?.addEventListener('click', () => {
			closeBlackScreen();
		});
		document.onkeydown = function (evt) {
			evt = evt || window.event;
			if (evt.keyCode == 27) {
			closeButton?.click();
			}
		}
	})
}