"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function editDica(idDica) {
  var dica;
  coringa('14', {
    idDica: idDica
  }).then(function (response) {
    var result = JSON.parse(response);
    console.log(result);
    dica = result.dicas[0];
    document.querySelector('section#main > div.principal').innerText = '';
    var divPrincipal = criarElement({
      attributes: {
        "class": "novaDicaForm"
      },
      selector: true,
      parent: document.querySelector('section#main > div.principal'),
      tag: "div"
    });
    criarElement({
      id: false,
      textoHtml: "EDITANDO DICA N. ".concat(dica.idDica),
      parent: divPrincipal.id,
      tag: "div"
    });
    criarElement({
      id: "editDicaForm",
      parent: divPrincipal.id,
      tag: "form"
    });
    criarElement({
      id: false,
      selector: true,
      parent: document.querySelector("#".concat(divPrincipal.id, " > form")),
      tag: "fieldset"
    });
    criarElement({
      id: false,
      textoHtml: "grupo",
      selector: true,
      parent: document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      tag: "legend"
    });
    criarElement({
      id: false,
      attributes: {
        "class": "form-control",
        name: "grupo"
      },
      selector: true,
      parent: document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      tag: "select"
    });
    var gruposEdit = grupos.split(', ');
    gruposEdit.shift();
    gruposEdit.forEach(function (grupo, key) {
      criarElement({
        id: false,
        attributes: {
          value: key + 1,
          selected: key + 1 == dica.grupo ? 'selected' : ''
        },
        textoHtml: grupo,
        selector: true,
        parent: document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type select")),
        tag: "option"
      });
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
      "tag": "fieldset"
    });
    criarElement({
      "id": false,
      "textoHtml": "título",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
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
        "value": dica.titulo
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
      "tag": "fieldset"
    });
    criarElement({
      "id": false,
      "textoHtml": "Informações Gerais",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
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
      "textoHtml": dica.informacoes,
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "textarea"
    });
    autosize(document.querySelector('textarea:last-of-type'));
    document.querySelector('textarea:last-of-type').addEventListener('keyup', function (e) {
      autosize(e.target);
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "linksDica"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
      "tag": "fieldset"
    });
    criarElement({
      "id": false,
      "textoHtml": "Links",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "legend"
    });
    criarElement({
      "id": "link",
      "attributes": {
        "class": "form-control",
        "type": "text",
        "placeholder": "Link para a dica",
        "name": "linkDica"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "btn btn-sm btn-success",
        "type": "button"
      },
      "textoHtml": "Incluir",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "button"
    });
    document.querySelector('fieldset.linksDica button').addEventListener('click', function (e) {
      var linkInput = document.querySelector('fieldset.linksDica input[name=linkDica]');
      if (linkInput.value != '' && linkInput.value.match(/^(https:\/\/|http:\/\/)/)) {
        criarElement({
          "id": false,
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados")),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "attributes": {
            "href": linkInput.value,
            "target": "_blank"
          },
          "textoHtml": linkInput.value,
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
          "tag": "a"
        });
        criarElement({
          "id": false,
          "attributes": {},
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
          "tag": "div"
        });
        document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type > div")).addEventListener('click', function (e) {
          e.target.parentElement.remove();
        });
        linkInput.value = '';
      }
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "linksVinculados"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "div"
    });
    dica.links.forEach(function (link) {
      if (link != '') {
        criarElement({
          "id": false,
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados")),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "attributes": {
            "href": link,
            "target": "_blank"
          },
          "textoHtml": link,
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
          "tag": "a"
        });
        criarElement({
          "id": false,
          "attributes": {},
          "selector": true,
          "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
          "tag": "div"
        });
        document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type > div")).addEventListener('click', function (e) {
          e.target.parentElement.remove();
        });
      }
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "validadeDica"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
      "tag": "fieldset"
    });
    criarElement({
      "id": false,
      "textoHtml": "Validade",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "legend"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "form-control",
        "type": "date",
        "name": "validadeDica",
        "value": dica.validade
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
      "tag": "input"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "arquivosVinculados"
      },
      "target": "after",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset.validadeDica")),
      "tag": "fieldset"
    });
    criarElement({
      "id": false,
      "textoHtml": "arquivos vinculados",
      "selector": true,
      "parent": document.querySelector("fieldset.arquivosVinculados"),
      "tag": "legend"
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("fieldset.arquivosVinculados"),
      "tag": "div"
    });
    var idInputFile = criarElement({
      "attributes": {
        "class": "form-control",
        "multiple": "1",
        "capture": "capture",
        "accept": "application/pdf,image/png,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,txt,.odt,.rtf,.jpg,.jpeg,.xls,.xlsx,.pps,.ppsx,.pptx,.csv,.ogg",
        "type": "file",
        "name": "upload"
      },
      "selector": true,
      "parent": document.querySelector("fieldset.arquivosVinculados > div"),
      "tag": "input"
    });
    criarElement({
      "id": "arquivosvinculados",
      "selector": true,
      "parent": document.querySelector("fieldset.arquivosVinculados"),
      "tag": "div"
    });
    arquivosVinculadosConstructor(dica.arquivosVinculados);
    criarElement({
      "id": false,
      "attributes": {
        "class": "btn btn-secondary",
        "type": "button"
      },
      "textoHtml": "Enviar",
      "selector": true,
      "parent": document.querySelector("fieldset.arquivosVinculados > div"),
      "tag": "button"
    });
    var botaoEnviar = document.querySelector("fieldset.arquivosVinculados > div button");
    var filesInput = document.getElementById("".concat(idInputFile.id));
    filesInput.addEventListener('click', function (e) {
      if (e.target.files.length > 0) {
        botaoEnviar.classList.toggle('btn-secondary');
        botaoEnviar.classList.toggle('btn-success');
      } else {
        var _document$querySelect;
        botaoEnviar.classList.toggle('btn-secondary');
        botaoEnviar.classList.toggle('btn-success');
        (_document$querySelect = document.querySelector('progress#file_progress')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      }
      botaoEnviar.innerHTML = 'Enviar';
    });
    filesInput.addEventListener('change', function (e) {
      if (e.target.files.length > 0) {
        botaoEnviar.classList.toggle('btn-secondary');
        botaoEnviar.classList.toggle('btn-success');
      } else {
        var _document$querySelect2;
        botaoEnviar.classList.toggle('btn-secondary');
        botaoEnviar.classList.toggle('btn-success');
        (_document$querySelect2 = document.querySelector('progress#file_progress')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.remove();
      }
      botaoEnviar.innerHTML = 'Enviar';
    });
    botaoEnviar.addEventListener('click', function (e) {
      if (filesInput.files.length > 0) {
        if (document.querySelector('progress#file_progress') == null) {
          criarElement({
            "id": "file_progress",
            "attributes": {
              "type": "button",
              "value": 0.00001,
              "max": 100
            },
            "textoHtml": "Enviar",
            "target": "after",
            "parent": idInputFile.id,
            "tag": "progress"
          });
        }
        var uri = "sendDicas.php";
        var xhr = new XMLHttpRequest();
        var ajaxData = new FormData();
        xhr.open("POST", uri, true);
        xhr.upload.addEventListener("progress", function (e) {
          if (e.lengthComputable) {
            document.getElementById('file_progress').value = Math.round(e.loaded * 100 / e.total);
          }
        }, false);
        xhr.upload.addEventListener("load", function () {
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
              result.fail.forEach(function (erroObject) {
                textoAtencao.push("".concat(erroObject.file, " (").concat(erroObject.erro, ")"));
              });
            }
            if (result.success > 0) {
              arquivosVinculadosConstructor(result.arquivosVinculados);
              informaSucesso("Upload com sucesso de ".concat(result.success, " arquivo").concat(result.success > 1 ? 's' : ''), 4000);
            }
          }
        };
        Object.entries(filesInput.files).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];
          ajaxData.append(key, val);
        });
        ajaxData.append('idDica', idDica);
        xhr.send(ajaxData);
      }
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "botoesOpcoes"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "btn btn-success",
        "type": "submit"
      },
      "textoHtml": "Salvar Alterações",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > div:last-of-type")),
      "tag": "button"
    });
    document.querySelector('form#editDicaForm').addEventListener('submit', function (e) {
      var _document$querySelect3;
      e.preventDefault();
      (_document$querySelect3 = document.querySelector('div.alertaErros')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.remove();
      var linksIncluidos = [];
      document.querySelectorAll('div.linksVinculados > div').forEach(function (element) {
        linksIncluidos.push(element.children[0].getAttribute('href'));
      });
      var erros = formControl('editDicaForm');
      if (erros.length > 0) {
        alertErros({
          "erros": erros,
          "selectorTarget": "#editDicaForm"
        });
      } else {
        var instrucoes = {
          "idDica": idDica,
          "grupo": document.querySelector('select[name=grupo]').value,
          "titulo": document.querySelector('input[name=titulo]').value,
          "informacoes": document.querySelector("#editDicaForm textarea").value,
          "links": JSON.stringify(linksIncluidos),
          "validade": document.querySelector('input[name=validadeDica]').value
        };
        coringa('15', instrucoes).then(function (result) {
          console.log(result);
          if (result.erros == false) {
            informaSucesso('Dica alterada com sucesso', 2000);
          } else {
            console.log(result);
            informaErro('Erro ao tentar editar a dica', 3000);
          }
        });
      }
    });
    var excluirButton = criarElement({
      "attributes": {
        "class": "btn btn-danger",
        "type": "button"
      },
      "textoHtml": "Excluir Dica",
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > div:last-of-type")),
      "tag": "button"
    });
    document.getElementById(excluirButton.id).addEventListener('click', function (e) {
      e.target.classList.remove('btn-danger');
      e.target.classList.add('btn-warning');
      e.target.innerHTML = '<span class=\'spinner\'></span> Aguarde...';
      // e.target.style.color = 'white'
      setTimeout(function () {
        var _document$querySelect4, _document$querySelect5;
        // e.target.parentElement.firstElementChild.remove()
        e.target.innerHTML = 'Operação IRREVERSÍVEL. Tens certeza?';
        e.target.classList.add('btn-danger');
        e.target.classList.remove('btn-warning');
        (_document$querySelect4 = document.querySelector('button[confirma=sim]')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.remove();
        criarElement({
          "attributes": {
            "class": "btn btn-warning",
            "type": "button",
            "confirma": "sim"
          },
          "textoHtml": "Sim, excluir!",
          "selector": true,
          "parent": document.querySelector("div.botoesOpcoes"),
          "tag": "button"
        });
        document.querySelector('button[confirma=sim]').addEventListener('click', function (ele) {
          document.querySelector('div.botoesOpcoes').innerHTML = '';
          criarElement({
            "attributes": {
              "class": "btn btn-primary",
              "type": "button",
              "excluindo": "excluindo"
            },
            "textoHtml": "Excluindo arquivos...",
            "selector": true,
            "parent": document.querySelector("div.botoesOpcoes"),
            "tag": "button"
          });
          function chamaNaOrdem() {
            return _chamaNaOrdem.apply(this, arguments);
          }
          function _chamaNaOrdem() {
            _chamaNaOrdem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return coringa('16', {
                      "idDica": idDica
                    }).then(function (result) {
                      // result = JSON.parse(result);
                      if (result.diretorio == false) {
                        document.querySelector('button[excluindo]').innerHTML = 'Excluindo informações...';
                      }
                      return idDica;
                    });
                  case 2:
                    _context.next = 4;
                    return coringa('17', {
                      "idDica": idDica
                    }).then(function (result) {
                      // result = JSON.parse(result);
                      if (result.erros == false) {
                        document.querySelector('section#main > div.principal').innerHTML = '';
                        informaSucesso('Dica excluída com sucesso', 2000);
                      }
                    });
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _chamaNaOrdem.apply(this, arguments);
          }
          chamaNaOrdem();
        });
        (_document$querySelect5 = document.querySelector('button[confirma=cancelar]')) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.remove();
        criarElement({
          "attributes": {
            "class": "btn btn-success",
            "type": "button",
            "confirma": "cancelar"
          },
          "textoHtml": "Não, cancelar!",
          "selector": true,
          "parent": document.querySelector("div.botoesOpcoes"),
          "tag": "button"
        });
        document.querySelector('button[confirma=cancelar]').addEventListener('click', function (el) {
          var _document$querySelect6, _document$querySelect7;
          (_document$querySelect6 = document.querySelector('button[confirma=sim]')) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.remove();
          (_document$querySelect7 = document.querySelector('button[confirma=cancelar]')) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.remove();
          e.target.innerHTML = 'Excluir Dica';
          e.target.classList.add('btn-danger');
          e.target.classList.remove('btn-warning');
        });
      }, 500);
    });
  });
  return;
}
function buscarDicas() {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "buscaDicaForm"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "parent": divPrincipal.id,
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Busca Documento ou Dica",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > fieldset")),
    "tag": "legend"
  });
  criarElement({
    "id": "buscaDicaForm",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > fieldset")),
    "tag": "form"
  });
  criarElement({
    "id": false,
    "textoHtml": "Escolha um grupo",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " form")),
    "tag": "label"
  });
  criarElement({
    "id": false,
    "attributes": {
      "name": "grupo",
      "class": "form-control"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " form")),
    "tag": "select"
  });
  var gruposBusca = grupos.split(', ');
  gruposBusca[0] = 'Todos';
  gruposBusca.forEach(function (grupoName, key) {
    criarElement({
      "id": false,
      "attributes": {
        "value": key
      },
      "textoHtml": grupoName,
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " select")),
      "tag": "option"
    });
  });
  criarElement({
    "id": false,
    "attributes": {
      "type": "submit",
      "class": "btn btn-primary"
    },
    "textoHtml": "Buscar",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " form")),
    "tag": "button"
  });
  // ! results
  criarElement({
    "id": false,
    "attributes": {
      "class": "resultsDicas"
    },
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
  document.querySelector('form#buscaDicaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    coringa('14', {
      "grupo": document.querySelector('form#buscaDicaForm select').value
    }).then(function (result) {
      result = JSON.parse(result)
      console.log (result);
      document.querySelector('div.resultsDicas').innerText = '';
      if (result.dicas && result.dicas.length > 0) {
        // ! results TOPICS
        criarElement({
          "id": false,
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "ID",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "GRUPO",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "TÍTULO",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "INFORMAÇÕES",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "INCLUSÃO",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "VALIDADE",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "textoHtml": "ARQ.",
          "selector": true,
          "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
          "tag": "div"
        });
      }
      if (result.dicas) {
        result.dicas.forEach(function (dica, key) {
          criarElement({
            "id": false,
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas'),
            "tag": "div"
          });
          document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type').addEventListener('click', function (e) {
            editDica(floatValor(e.currentTarget.firstElementChild.innerText));
          });
          criarElement({
            "id": false,
            "textoHtml": zeros(dica.idDica, 2),
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": grupos.split(', ')[dica.grupo],
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": dica.titulo,
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": dica.informacoes,
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": dica.inclusao.substring(1, 10).split('-').reverse().join('-'),
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": dica.validade.split('-').reverse().join('-'),
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "textoHtml": dica.arquivosVinculados.length == 0 ? '' : zeros(dica.arquivosVinculados.length, 2),
            "selector": true,
            "parent": document.querySelector('section#main > div.principal > div.resultsDicas > div:last-of-type'),
            "tag": "div"
          });
        });
      }
    });
  });
  return;
}
function classeIconImagem(extensao) {
  extensao = extensao.toLowerCase();
  if (['doc', 'docx', 'odt'].includes(extensao)) {
    classeIcon = 'icon-file-word';
  } else if (['xls', 'xlsx'].includes(extensao)) {
    classeIcon = 'icon-file-excel';
  } else if (extensao == 'ogg') {
    classeIcon = 'icon-file-ogg';
  } else if (extensao == 'csv') {
    classeIcon = 'icon-file-csv';
  } else if (extensao == 'rtf') {
    classeIcon = 'icon-file-rtf';
  } else if (extensao == 'pdf') {
    classeIcon = 'icon-file-pdf';
  } else if (extensao == 'txt') {
    classeIcon = 'icon-file-txt';
  } else if (['jpg', 'jpeg'].includes(extensao)) {
    classeIcon = 'icon-file-imagem';
  } else if (extensao == 'png') {
    classeIcon = 'icon-file-imagem';
  } else if (['ppt', 'pptx', 'pps'].includes(extensao)) {
    classeIcon = 'icon-file-powerpoint';
  } else {
    classeIcon = 'icon-file-geral';
  }
  return classeIcon;
}
function arquivosVinculadosConstructor(arquivosVinculados) {
  document.querySelector("#arquivosvinculados").innerHTML = '';
  arquivosVinculados.forEach(function (arquivoVinculado) {
    var caminhoSplit = arquivoVinculado.split('/');
    var arquivo = caminhoSplit[caminhoSplit.length - 1];
    var arquivoSplit = arquivo.split('.');
    var extensao = arquivoSplit[arquivoSplit.length - 1];
    var novoCaminho = [];
    caminhoSplit.forEach(function (parteCaminho, key) {
      if (key > 4) {
        novoCaminho.push(parteCaminho);
      }
    });
    var idCard = criarElement({
      "attributes": {
        "class": "flip-card"
      },
      "selector": true,
      "parent": document.querySelector("#arquivosvinculados"),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "inner-card"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id)),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "front-card"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.inner-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "icon-file ".concat(classeIconImagem(extensao))
      },
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.front-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.front-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "href": "https://portal.grupofirstrh.com.br/".concat(novoCaminho.join('/')),
        "download": arquivo,
        "target": "_blank"
      },
      "textoHtml": arquivo,
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.front-card > div:last-of-type")),
      "tag": "a"
    });
    criarElement({
      "attributes": {
        "class": "deleteFile"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.front-card")),
      "tag": "div"
    });
    // ! Confirmação de Exclusão
    criarElement({
      "id": false,
      "attributes": {
        "class": "back-card"
      },
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.inner-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "selector": true,
      "textoHtml": "Confirma Exclusão?",
      "parent": document.querySelector("#".concat(idCard.id, " div.back-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.back-card")),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "btn btn-secondary btn-sm",
        "type": "button"
      },
      "textoHtml": "Sim",
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.back-card > div:last-of-type")),
      "tag": "button"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "btn btn-secondary btn-sm",
        "type": "button"
      },
      "textoHtml": "Não",
      "selector": true,
      "parent": document.querySelector("#".concat(idCard.id, " div.back-card > div:last-of-type")),
      "tag": "button"
    });
    document.querySelector("#".concat(idCard.id, " div.front-card div.deleteFile")).addEventListener('click', function (e) {
      e.target.parentElement.parentElement.classList.add('exclusao');
    });
    document.querySelector("#".concat(idCard.id, " div.back-card button:nth-of-type(2)")).addEventListener('click', function (e) {
      e.target.parentElement.parentElement.parentElement.classList.remove('exclusao');
    });
    document.querySelector("#".concat(idCard.id, " div.back-card button:nth-of-type(1)")).addEventListener('click', function (e) {
      e.target.nextElementSibling.remove();
      e.target.parentElement.previousElementSibling.remove();
      e.target.classList.add('excluindo');
      e.target.innerHTML = 'Excluindo...';
      criarElement({
        "id": false,
        "attributes": {
          "class": "spinner"
        },
        "posicao": "prepend",
        "selector": true,
        "parent": e.target,
        "tag": "span"
      });
      coringa('12', {
        "file": arquivoVinculado
      }).then(function (result) {
        // result = JSON.parse(result)
        if (result.exclusao == true) {
          document.querySelector("#".concat(idCard.id)).classList.add('fadeOutDown');
          setTimeout(function () {
            document.querySelector("#".concat(idCard.id)).remove();
          }, 750);
        } else {
          informaAtencao('Não foi possível excluir o arquivo', 2500);
        }
      });
    });
  });
}
var menuUsuarios = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(1)');
menuUsuarios === null || menuUsuarios === void 0 ? void 0 : menuUsuarios.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.usuarios > div:nth-of-type(2)");
  var NovoTamanho = (element.childNodes.length - 1) / 2 * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
  var usuariosPortalAdmin = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(1)');
  usuariosPortalAdmin === null || usuariosPortalAdmin === void 0 ? void 0 : usuariosPortalAdmin.addEventListener('click', function () {
    document.querySelector('section#main > div.principal').innerHTML = '';
    var divPrincipal = criarElement({
      "selector": true,
      "parent": document.querySelector('section#main > div.principal'),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "usuariosListados"
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
        "class": "listaUsuarios"
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
  });
  var usuariosPortalDepRH = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(2)');
  usuariosPortalDepRH === null || usuariosPortalDepRH === void 0 ? void 0 : usuariosPortalDepRH.addEventListener('click', function () {
    document.querySelector('section#main > div.principal').innerHTML = '';
    var divPrincipal = criarElement({
      "selector": true,
      "parent": document.querySelector('section#main > div.principal'),
      "tag": "div"
    });
    criarElement({
      "id": false,
      "attributes": {
        "class": "usuariosListados"
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
        "class": "listaUsuarios"
      },
      "selector": true,
      "parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1)'),
      "tag": "ul"
    });
    coringa('6', {}).then(function (retorno) {
      Object.entries(retorno).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        var obj = JSON.stringify({
          "cpf": value.cpf
        });
        criarElement({
          "id": false,
          "attributes": {
            "class": (value.status != 0 ? 'inativo' : '') + ' hand'
          },
          "textoHtml": value.nomeCompleto,
          "selector": true,
          "parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul'),
          "tag": "li"
        });
        document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > ul > li:last-of-type').addEventListener('click', function (e) {
          coringa('7', "".concat(obj)).then(function (result) {
            exibeUsuarioForm(result);
          });
        });
      });
    });
  });
  var novoUsuario = document.querySelector('section#main > div.menu > div.usuarios > div:nth-of-type(2) > div:nth-of-type(3)');
  novoUsuario === null || novoUsuario === void 0 ? void 0 : novoUsuario.addEventListener('click', function () {
    document.querySelector('section#main > div.principal').innerHTML = '';
    coringa('18', {}).then(function (result) {
      // console.table(result.infoUser)
      if (result.infoUser.criarAdmin == 0 && result.infoUser.criarDeprh == 0) {
        return;
      } else {
        var divPrincipal = criarElement({
          "selector": true,
          "parent": document.querySelector('section#main > div.principal'),
          "tag": "div"
        });
        criarElement({
          "id": false,
          "attributes": {
            "class": "criacaoNovoUsuario"
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
              "class": "btn btn-dark"
            },
            "textoHtml": "PARA O PORTAL ADMINISTRATIVO",
            "selector": true,
            "parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > div:first-of-type'),
            "tag": "button"
          });
          var novoUsuarioAdmin = document.getElementById('novoUserAdmin');
          novoUsuarioAdmin === null || novoUsuarioAdmin === void 0 ? void 0 : novoUsuarioAdmin.addEventListener('click', function () {
            novoUsuarioForm({
              "tabela": "admin"
            });
          });
        }
        if (result.infoUser.criarDeprh == 1) {
          criarElement({
            "id": "novoUserDeprh",
            "attributes": {
              "type": "button",
              "class": "btn btn-dark"
            },
            "textoHtml": "PARA O PORTAL DO DEP. DE RH",
            "selector": true,
            "parent": document.querySelector('div#' + divPrincipal.id + ' > div:nth-of-type(1) > div:first-of-type'),
            "tag": "button"
          });
          var novoUsuarioDeprh = document.getElementById('novoUserDeprh');
          novoUsuarioDeprh === null || novoUsuarioDeprh === void 0 ? void 0 : novoUsuarioDeprh.addEventListener('click', function () {
            novoUsuarioForm({
              "tabela": "deprh"
            });
          });
        }
      }
    });
  });
});
var menuWebsite = document.querySelector("#main > div.menu > div.site > div:nth-of-type(1)");
menuWebsite === null || menuWebsite === void 0 ? void 0 : menuWebsite.addEventListener('click', function () {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "textoHtml": "Faremos o desenvolvimento dessa funcionalidade oportunamente.",
    "selector": true,
    "parent": document.querySelector('section#main > div.principal'),
    "tag": "div"
  });
});
var menuDicas = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(1)");
menuDicas === null || menuDicas === void 0 ? void 0 : menuDicas.addEventListener('click', function () {
  var element = document.querySelector("section#main > div.menu > div.admin > div:nth-of-type(2)");
  var NovoTamanho = (element.childNodes.length - 1) / 2 * tamanhoPadraoSubMenu;
  var ComputedHeight = getComputedStyle(element).height;
  if (ComputedHeight == '0px' || ComputedHeight == '' || ComputedHeight == undefined) {
    element.style.height = NovoTamanho + 'px';
  } else {
    element.style.height = '0px';
  }
});
var novaDicaButton = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(2) > div:nth-of-type(1)");
novaDicaButton === null || novaDicaButton === void 0 ? void 0 : novaDicaButton.addEventListener('click', function () {
  document.querySelector('section#main > div.principal').innerHTML = '';
  var divPrincipal = criarElement({
    "attributes": {
      "class": "novaDicaForm"
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
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "grupo",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "legend"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "name": "grupo"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "select"
  });
  grupos.split(', ').forEach(function (grupo, key) {
    criarElement({
      "id": false,
      "attributes": {
        "value": key
      },
      "textoHtml": grupo,
      "selector": true,
      "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type select")),
      "tag": "option"
    });
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "título",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
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
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Informações Gerais",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
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
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "textarea"
  });
  document.querySelector('textarea:last-of-type').addEventListener('keyup', function (e) {
    autosize(e.target);
  });
  // Inicialize o TinyMCE no textarea recém-criado
  tinymce.init({
    selector: 'textarea:last-of-type',
    plugins: 'bold italic underline',
    toolbar: 'bold italic underline'
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "linksDica"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Links",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "legend"
  });
  criarElement({
    "id": "link",
    "attributes": {
      "class": "form-control",
      "type": "text",
      "placeholder": "Link para a dica",
      "name": "linkDica"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "input"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "btn btn-sm btn-success",
      "type": "button"
    },
    "textoHtml": "Incluir",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "button"
  });
  document.querySelector('fieldset.linksDica button').addEventListener('click', function (e) {
    var linkInput = document.querySelector('fieldset.linksDica input[name=linkDica]');
    if (linkInput.value != '' && linkInput.value.match(/^(https:\/\/|http:\/\/)/)) {
      criarElement({
        "id": false,
        "selector": true,
        "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados")),
        "tag": "div"
      });
      criarElement({
        "id": false,
        "attributes": {
          "href": linkInput.value,
          "target": "_blank"
        },
        "textoHtml": linkInput.value,
        "selector": true,
        "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
        "tag": "a"
      });
      criarElement({
        "id": false,
        "attributes": {},
        "selector": true,
        "parent": document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type")),
        "tag": "div"
      });
      document.querySelector("#".concat(divPrincipal.id, " fieldset.linksDica > div.linksVinculados > div:last-of-type > div")).addEventListener('click', function (e) {
        e.target.parentElement.remove();
      });
      linkInput.value = '';
    }
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "linksVinculados"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "validadeDica"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "fieldset"
  });
  criarElement({
    "id": false,
    "textoHtml": "Validade",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "legend"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "form-control",
      "type": "date",
      "name": "validadeDica"
    },
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
    "tag": "input"
  });
  var inputImagem = document.createElement('input');
  inputImagem.type = 'file';
  inputImagem.id = 'inputImagem';
  var parentElement = document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type"));
  parentElement.appendChild(inputImagem);
  criarElement({
    "id": false,
    "attributes": {
      "class": "btn btn-success",
      "type": "submit"
    },
    "textoHtml": "Criar Dica",
    "selector": true,
    "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
    "tag": "button"
  });
  document.querySelector('#novaDicaForm').addEventListener('submit', function (e) {
    var _document$querySelect8;
    e.preventDefault();
    (_document$querySelect8 = document.querySelector('div.alertaErros')) === null || _document$querySelect8 === void 0 ? void 0 : _document$querySelect8.remove();
    var linksIncluidos = [];
    document.querySelectorAll('div.linksVinculados > div').forEach(function (element) {
      linksIncluidos.push(element.children[0].getAttribute('href'));
    });
    var erros = formControl('novaDicaForm');
    if (document.querySelector('select[name=grupo]').value == 'Escolha') {
      erros.push(['Informe o grupo']);
    }
    if (erros.length > 0) {
      var _document$querySelect9;
      (_document$querySelect9 = document.querySelector('div.alertaErros')) === null || _document$querySelect9 === void 0 ? void 0 : _document$querySelect9.remove();
      alertErros({
        "erros": erros,
        "selectorTarget": "#novaDicaForm"
      });
    } else {
      var _document$querySelect10;
      var instrucoes = {
        "idDica": (_document$querySelect10 = document.querySelector('input[name=idDica]')) !== null && _document$querySelect10 !== void 0 && _document$querySelect10.value ? document.querySelector('input[name=idDica]').value : '',
        "grupo": document.querySelector('select[name=grupo]').value,
        "titulo": document.querySelector('input[name=titulo]').value,
        "informacoes": document.querySelector("#novaDicaForm textarea").value,
        "links": linksIncluidos.join('##'),
        "validade": document.querySelector('input[name=validadeDica]').value
      };
      coringa('11', instrucoes).then(function (result) {
        // result = JSON.parse(result)
        if (result.erros == false) {
          var textoSucesso = 'Dica criada com sucesso';
          informaSucesso(textoSucesso, 2000);
          editDica(result.idDica);
        } else {
          informaErro('Erro ao tentar criar a dica', 3000);
        }
        return;
      });
    }
  });
});
var pesquisarDicas = document.querySelector("#main > div.menu > div.admin > div:nth-of-type(2) > div:nth-of-type(2)");
pesquisarDicas === null || pesquisarDicas === void 0 ? void 0 : pesquisarDicas.addEventListener('click', function () {
  buscarDicas();
});
var sair = document.querySelector('section#header > div:nth-of-type(2)');
sair === null || sair === void 0 ? void 0 : sair.addEventListener('click', function () {
  coringa('2', {}).then(function () {
    window.location = '../';
  });
});
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