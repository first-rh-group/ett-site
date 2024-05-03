"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function exibeUsuarioForm(objeto) {
  // console.table(objeto);
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "editandoInformacoesUsuario"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": "editandoUsuarioForm",
    "parent": divPrincipal.id,
    "tag": "form"
  });
  criarElement({
    "id": false,
    "attributes": {
      "type": "hidden",
      "name": "idUsuario",
      "value": objeto.id
    },
    "parent": "editandoUsuarioForm",
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "type": "hidden",
      "name": "tabela",
      "value": objeto.tabela
    },
    "parent": "editandoUsuarioForm",
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Editando permissões e informações do usuário",
    "parent": "editandoUsuarioForm",
    "tag": "h2"
  });
  criarElement({
    "id": false,
    "attributes": {
      "style": "margin-top: 25px;"
    },
    "parent": "editandoUsuarioForm",
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Informações",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "legend"
  });
  criarElement({
    "id": false,
    "textoHtml": "Nome do Usuário",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "type": "text",
      "name": "nomeCompleto",
      "placeholder": "Nome do Usuário",
      "form-control": "caracteres3",
      "aria-label": "Nome do Usuário",
      "value": objeto.nomeCompleto
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "CPF",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "label"
  });
  criarElement({
    "id": "cpfInput",
    "attributes": {
      "class": "form-control",
      "type": "tel",
      "name": "cpf",
      "placeholder": "CPF",
      "form-control": "cpf",
      "aria-label": "CPF",
      "value": objeto.cpf,
      "onkeyup": "formatacaoEspecifica (this.value,'cpf','cpfInput');",
      "onchange": "formatacaoEspecifica (this.value,'cpf','cpfInput');"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Iniciais do Nome do Usuário",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "type": "text",
      "name": "iniciais",
      "placeholder": "Iniciais",
      "form-control": "letras3",
      "aria-label": "Iniciais",
      "value": objeto.iniciais
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Telefone Celular",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "label"
  });
  criarElement({
    "id": "telefoneInput",
    "attributes": {
      "class": "form-control",
      "type": "tel",
      "name": "telefone",
      "placeholder": "Telefone Celular",
      "form-control": "telefoneCelular",
      "aria-label": "Celular",
      "value": objeto.telefones,
      "onkeyup": "formatacaoEspecifica (this.value,'telefone','telefoneInput');",
      "onchange": "formatacaoEspecifica (this.value,'telefone','telefoneInput');"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Senha (somente preencha se desejar alterar)",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "type": "password",
      "name": "senha",
      "placeholder": "Senha"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "permissoes"
    },
    "parent": "editandoUsuarioForm",
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Permissões",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
    "tag": "legend"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Dias Autorizados",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "diasSemana"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "div"
  });
  var diasSemana = {
    "0": "SEG",
    "1": "TER",
    "2": "QUA",
    "3": "QUI",
    "4": "SEX",
    "5": "SÁB",
    "6": "DOM"
  };
  for (var _i = 0, _Object$entries = Object.entries(diasSemana); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.diasSemana'),
      "tag": "div"
    });
    var checked;
    if (objeto.diasAutorizados[key] == 0) {
      checked = true;
    } else {
      checked = false;
    }
    criarElement({
      "id": "dia_" + key,
      "attributes": {
        "type": "checkbox",
        "name": "dia_" + key,
        "checked": checked
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.diasSemana > div:last-of-type'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "dia_" + key
      },
      "textoHtml": value,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.diasSemana > div:last-of-type'),
      "tag": "label"
    });
  }
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Horário Autorizado",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "horario"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "horarioInicial",
      "type": "time",
      "value": objeto.horarioAutorizado[0] + objeto.horarioAutorizado[1] + ":" + objeto.horarioAutorizado[2] + objeto.horarioAutorizado[3]
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.horario'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "horarioFinal",
      "type": "time",
      "min": "00:01",
      "max": "23:59",
      "value": objeto.horarioAutorizado[4] + objeto.horarioAutorizado[5] + ":" + objeto.horarioAutorizado[6] + objeto.horarioAutorizado[7]
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.horario'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "textoHtml": "Status do Usuário",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "statusSuspensao"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
    "tag": "div"
  });
  var checked;
  if (objeto.status == 1) {
    checked = true;
  } else {
    checked = false;
  }
  criarElement({
    "id": "status",
    "attributes": {
      "type": "checkbox",
      "name": "status",
      "checked": checked
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.statusSuspensao'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "for": "status"
    },
    "textoHtml": "Suspender",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div.statusSuspensao'),
    "tag": "label"
  });
  if (objeto.tabela == 'admin') {
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "textoHtml": "Permissão para Criar Usuários para o Portal Admin",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
      "tag": "label"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "permissaoCriarUsuario",
        "criarusuario": "administrativo"
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
      "tag": "div"
    });
    criarElement({
      "id": "criarAdmin_1",
      "attributes": {
        "name": "criarUsuarioAdministrativo",
        "type": "radio",
        "value": 1,
        "checked": objeto.criarAdmin == 1 ? 'checked' : false
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=administrativo]'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "criarAdmin_1"
      },
      "textoHtml": "Sim, pode criar",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=administrativo]'),
      "tag": "label"
    });
    criarElement({
      "id": "criarAdmin_2",
      "attributes": {
        "name": "criarUsuarioAdministrativo",
        "type": "radio",
        "value": 2,
        "checked": objeto.criarAdmin == 0 ? 'checked' : false
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=administrativo]'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "criarAdmin_2"
      },
      "textoHtml": "Não, não pode criar",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=administrativo]'),
      "tag": "label"
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes'),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "textoHtml": "Permissão para Criar Usuários para o Portal DepRH",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
      "tag": "label"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "permissaoCriarUsuario",
        "criarusuario": "deprh"
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes > div:last-of-type'),
      "tag": "div"
    });
    criarElement({
      "id": "criarDeprh_1",
      "attributes": {
        "name": "criarUsuarioDeprh",
        "type": "radio",
        "value": 1,
        "checked": objeto.criarDeprh == 1 ? 'checked' : false
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=deprh]'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "criarDeprh_1"
      },
      "textoHtml": "Sim, pode criar",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=deprh]'),
      "tag": "label"
    });
    criarElement({
      "id": "criarDeprh_2",
      "attributes": {
        "name": "criarUsuarioDeprh",
        "type": "radio",
        "value": 2,
        "checked": objeto.criarDeprh == 0 ? 'checked' : false
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=deprh]'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "criarDeprh_2"
      },
      "textoHtml": "Não, não pode criar",
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset.permissoes div[criarusuario=deprh]'),
      "tag": "label"
    });
  }
  criarElement({
    "id": false,
    "parent": "editandoUsuarioForm",
    "tag": "div"
  });
  var obj = JSON.stringify({
    "nomeFormulario": "editandoUsuarioForm"
  });
  criarElement({
    "id": false,
    "attributes": {
      "style": "margin-right:5px;",
      "class": "btn btn-success",
      "type": "submit"
    },
    "textoHtml": "Salvar Edições",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > div:last-of-type'),
    "tag": "button"
  });
  document.querySelector('form#editandoUsuarioForm').addEventListener('submit', function (e) {
    var diasSemana = '';
    document.querySelectorAll("#editandoUsuarioForm div.diasSemana > div").forEach(function (element) {
      diasSemana += element.firstElementChild.checked ? '0' : '1';
    });
    e.preventDefault();
    var instrucoes = {
      "nomeCompleto": document.querySelector('form#editandoUsuarioForm input[name=nomeCompleto]').value,
      "cpf": soNumeros(document.querySelector('form#editandoUsuarioForm input[name=cpf]').value),
      "iniciais": document.querySelector('form#editandoUsuarioForm input[name=iniciais]').value,
      "telefones": soNumeros(document.querySelector('form#editandoUsuarioForm input[name=telefone]').value),
      "diasAutorizados": diasSemana,
      "horarioAutorizado": soNumeros(document.querySelector('form#editandoUsuarioForm input[name=horarioInicial]').value) + soNumeros(document.querySelector('form#editandoUsuarioForm input[name=horarioFinal]').value),
      "status": document.querySelector("#status").checked ? 1 : 0,
      "tabela": document.querySelector("#editandoUsuarioForm > input[name=tabela]").value,
      "idUsuario": document.querySelector("#editandoUsuarioForm > input[name=idUsuario]").value
    };
    if (document.querySelector("#editandoUsuarioForm input[type=password]").value.trim() != '') {
      instrucoes['senha'] = document.querySelector("#editandoUsuarioForm input[type=password]").value.trim();
    }
    if (objeto.tabela == 'admin') {
      instrucoes['criarAdmin'] = document.querySelector("#criarAdmin_1").checked ? 1 : 0;
      instrucoes['criarDeprh'] = document.querySelector("#criarDeprh_1").checked ? 1 : 0;
    }
    console.log(instrucoes);
    coringa('5', instrucoes).then(function (result) {
      console.log(result);
      informaSucesso('Informações salvas com sucesso', 1700);
    });
  });
  var obj = JSON.stringify({
    "idUsuario": objeto.id,
    "portal": objeto.tabela
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "btn btn-danger",
      "type": "button",
      "onclick": "coringa('8','" + obj + "');"
    },
    "textoHtml": "Excluir Usuário",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > div:last-of-type'),
    "tag": "button"
  });
  criarElement({
    "id": "respostaPadroes2",
    "attributes": {
      "style": "margin-top:10px;"
    },
    "parent": "editandoUsuarioForm",
    "tag": "div"
  });
  return;
}