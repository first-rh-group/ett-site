"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ÚLITMO - 10
function coringa(_x, _x2) {
  return _coringa.apply(this, arguments);
}
function _coringa() {
  _coringa = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(codigo, instrucoes) {
    var instrucoesEnviadas, _i2, _Object$entries2, _Object$entries2$_i, key, value, extra, form, controle, idBlackScreen, obj;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          instrucoesEnviadas = '';
          if (instrucoes != null) {
            if (_typeof(instrucoes) != 'object') {
              instrucoes = JSON.parse(instrucoes);
            }
            for (_i2 = 0, _Object$entries2 = Object.entries(instrucoes); _i2 < _Object$entries2.length; _i2++) {
              _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
              instrucoesEnviadas += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(value);
            }
          }
          extra = '';
          if (!['10'].includes(codigo)) {
            _context.next = 15;
            break;
          }
          form = document.getElementById(instrucoes.nomeFormulario);
          form.addEventListener('submit', function (event) {
            if (event) {
              event.preventDefault();
            }
          }, false);
          controle = formControl(instrucoes.nomeFormulario, 'respostaPadroes2');
          document.getElementById('respostaPadroes2').innerHTML = '';
          if (!(controle.length > 0)) {
            _context.next = 12;
            break;
          }
          window.location = '#respostaPadroes2';
          alertErros({
            "selectorTarget": "div#respostaPadroes2",
            "erros": controle
          });
          return _context.abrupt("return");
        case 12:
          extra = "&" + serialize(instrucoes.nomeFormulario);
          // console.log(extra);
          _context.next = 22;
          break;
        case 15:
          if (!(codigo == 8)) {
            _context.next = 22;
            break;
          }
          idBlackScreen = blackScreen();
          criarModal({
            "idBlackScreen": idBlackScreen,
            "top": {
              "texto": "Excluindo Usuário"
            },
            "main": {
              "texto": ""
            }
          });
          oqueDevoSaber({
            "selectorTarget": "div.modal_main",
            "posicao": "prepend",
            "pergunta": "O que devo saber?",
            "explicacoes": ['A exclusão é irreversível', 'Você somente estará excluindo o usuário do Portal ' + (instrucoes.portal == 'admin' ? 'Administrativo' : 'do Dep. RH'), 'Para excluir o usuário também do Portal ' + (instrucoes.portal != 'admin' ? 'Administrativo' : 'do Dep. RH') + ', escolha a opção Usuários do Portal ' + (instrucoes.portal != 'admin' ? 'Administrativo' : 'do Dep. RH')]
          });
          obj = JSON.stringify(instrucoes);
          criarElement({
            "id": false,
            "attributes": {
              "class": "btn btn-danger",
              "type": "submit",
              "onclick": "coringa('9','" + obj + "');"
            },
            "textoHtml": "Clique para Excluir",
            "selector": true,
            "parent": document.querySelector('div.modal_main'),
            "tag": "button"
          });
          return _context.abrupt("return");
        case 22:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            if (window.XMLHttpRequest) {
              // Mozilla, Safari, ...
              xmlhttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
              // IE
              try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
              } catch (e) {
                try {
                  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
              }
            }
            // console.log(instrucoesEnviadas);
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText) {
                  var retorno = JSON.parse(xmlhttp.responseText);
                }
                if (codigo == 4 || codigo == 7) {
                  retorno['tabela'] = codigo == 4 ? 'admin' : 'deprh';
                } else if (codigo == 9) {
                  if (retorno == true) {
                    var _document$querySelect;
                    informaSucesso('Usuário excluído com sucesso', 1700);
                    (_document$querySelect = document.querySelector('div.blackScreenModal div.modal_close')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.click();
                    document.querySelector('section#main > div.principal').innerHTML = '';
                  }
                } else if (codigo == 10) {
                  document.getElementById('respostaPadroes2').innerHTML = xmlhttp.responseText;
                  if (retorno == true) {
                    document.getElementById(instrucoes.nomeFormulario).reset();
                    informaSucesso('Usuário incluído', 1700);
                  }
                }
                resolve(retorno);
              }
            };
            xmlhttp.open("POST", "processadorAjax.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send("action=superCoringa&codigo=" + codigo + extra + instrucoesEnviadas);
          }));
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _coringa.apply(this, arguments);
}
function novoUsuarioForm(objeto) {
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
      "name": "tabela",
      "value": objeto.tabela
    },
    "parent": "editandoUsuarioForm",
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Criando novo Usuário para o Portal " + (objeto.tabela == 'admin' ? 'Administrativo' : 'do Dep. RH'),
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
      "aria-label": "Nome do Usuário"
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
      "aria-label": "Iniciais"
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
      "placeholder": "Senha",
      "form-control": "notNull",
      "aria-label": "Senha"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(1)'),
    "tag": "input"
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
    "textoHtml": "Permissões",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "legend"
  });
  criarElement({
    "id": false,
    "textoHtml": "Dias Autorizados",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "diasSemana"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
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
    var checked = true;
    if (objeto.tabela == 'deprh' && (key == 5 || key == 6)) {
      checked = false;
    }
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana'),
      "tag": "div"
    });
    criarElement({
      "id": "dia_" + key,
      "attributes": {
        "type": "checkbox",
        "name": "dia_" + key,
        "checked": checked
      },
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana > div:last-of-type'),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "for": "dia_" + key
      },
      "textoHtml": value,
      "selector": true,
      "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.diasSemana > div:last-of-type'),
      "tag": "label"
    });
  }
  criarElement({
    "id": false,
    "textoHtml": "Horário Autorizado",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "horario"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "div"
  });
  var horario_1 = '00:00';
  var horario_2 = '23:59';
  if (objeto.tabela == 'deprh') {
    var horario_1 = '08:00';
    var horario_2 = '19:00';
  }
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "horarioInicial",
      "type": "time",
      "value": horario_1
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.horario'),
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
      "value": horario_2
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.horario'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "textoHtml": "Status do Usuário",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "statusSuspensao"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2)'),
    "tag": "div"
  });
  criarElement({
    "id": "status",
    "attributes": {
      "type": "checkbox",
      "name": "status"
    },
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.statusSuspensao'),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "for": "status"
    },
    "textoHtml": "Suspender",
    "selector": true,
    "parent": document.querySelector('form#editandoUsuarioForm > fieldset:nth-of-type(2) div.statusSuspensao'),
    "tag": "label"
  });
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
      "type": "submit",
      "onclick": "coringa('10','" + obj + "');"
    },
    "textoHtml": "Incluir",
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