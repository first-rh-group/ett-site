"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var toogle = document.getElementById('toogle');
toogle.addEventListener("click", function (e) {
  if (document.getElementById('menuSuspensoMobile').classList.contains('showMenuMobile')) {
    document.getElementById('menuSuspensoMobile').classList.remove("showMenuMobile");
    document.getElementById('toogle').classList.remove("toogleCross");
  } else {
    document.getElementById('toogle').classList.add("toogleCross");
    document.getElementById('menuSuspensoMobile').classList.add("showMenuMobile");
  }
});
var botaoContato = document.querySelector('div#menuSuspenso > a:first-of-type');
botaoContato === null || botaoContato === void 0 ? void 0 : botaoContato.addEventListener("click", function () {
  contagemNumerosFirst();
});
var botaoContatoMobile = document.querySelector('div#menuSuspensoMobile > a:first-of-type');
botaoContatoMobile === null || botaoContatoMobile === void 0 ? void 0 : botaoContatoMobile.addEventListener("click", function () {
  contagemNumerosFirst();
  document.getElementById('menuSuspensoMobile').classList.remove("showMenuMobile");
  document.getElementById('toogle').classList.remove("toogleCross");
});
var flag = document.getElementById('flag');
flag.addEventListener("click", function () {
  if (flag.classList.contains('us-flag')) {
    flag.classList.remove("us-flag");
    flag.classList.add("br-flag");
    localStorage.setItem('firstrh-currentLing', 'us');
    trocaLingua('us');
  } else {
    flag.classList.remove("br-flag");
    flag.classList.add("us-flag");
    localStorage.setItem('firstrh-currentLing', 'br');
    trocaLingua('br');
  }
});
var flagMobile = document.getElementById('flag-mobile');
flagMobile === null || flagMobile === void 0 ? void 0 : flagMobile.addEventListener("click", function () {
  if (flagMobile.classList.contains('us-flag')) {
    flagMobile.classList.remove("us-flag");
    flagMobile.classList.add("br-flag");
    localStorage.setItem('firstrh-currentLing', 'us');
    trocaLingua('us');
  } else {
    flagMobile.classList.remove("br-flag");
    flagMobile.classList.add("us-flag");
    localStorage.setItem('firstrh-currentLing', 'br');
    trocaLingua('br');
  }
});
document.body.addEventListener("click", function (e) {
  if (document.querySelector('div.blackScreen') && e.srcElement.className == 'blackScreen') {
    var _document$querySelect;
    (_document$querySelect = document.querySelector('div.blackScreen div.modal_close')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.click();
  }
});
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    var _document$querySelect2;
    (_document$querySelect2 = document.querySelector('div.blackScreen div.modal_close')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.click();
  }
};
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return rect.top;
}
function criarModal(objeto) {
  var modal = criarElement({
    "attributes": {
      "class": "modal fadeInDown"
    },
    "parent": objeto.idBlackScreen,
    "tag": "div"
  });
  var top = criarElement({
    "id": false,
    "attributes": {
      "class": "modal_top",
      "style": "background-color:" + objeto.top.color
    },
    "texto": objeto.top.texto,
    "parent": modal.id,
    "tag": "div"
  });
  criarElement({
    "id": false,
    "attributes": {
      "class": "modal_close",
      "onClick": "fadeOutBlackScreen();"
    },
    "texto": "X",
    "selector": true,
    "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
    "tag": "div"
  });
  var main = criarElement({
    "id": false,
    "attributes": {
      "class": "modal_main"
    },
    "texto": objeto.main.texto,
    "parent": modal.id,
    "tag": "div"
  });
  setTimeout(function () {
    document.getElementById(objeto.idBlackScreen).classList.remove('fadeOutBlackScreen');
  }, 100);
  return modal.id;
}
var geral = {
  "div1": document.querySelector('section#geral > div:nth-of-type(1)'),
  "div2": document.querySelector('section#geral > div:nth-of-type(2)'),
  "div3": document.querySelector('section#geral > div:nth-of-type(3) > div:nth-of-type(1)'),
  "div4": document.querySelector('section#geral > div:nth-of-type(3) > div:nth-of-type(2)')
};
var ett_first = {
  "div1": document.querySelector('section#ett_first > div:nth-of-type(1)'),
  "div2": document.querySelector('section#ett_first > div:nth-of-type(2)'),
  "div3": document.querySelector('section#ett_first > div:nth-of-type(3)'),
  "button": document.querySelector('section#ett_first button')
};
var shift = {
  "div1": document.querySelector('section#shift > div:nth-of-type(1)'),
  "div2": document.querySelector('section#shift > div:nth-of-type(2)'),
  "div3": document.querySelector('section#shift > div:nth-of-type(3)')
};
var recruit = {
  "div1": document.querySelector('section#recruit > div:nth-of-type(1)'),
  "div2": document.querySelector('section#recruit > div:nth-of-type(2)'),
  "div3": document.querySelector('section#recruit > div:nth-of-type(3)')
};
var endereco = {
  "div1": document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)'),
  "div2": document.querySelector('section#rodape > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)'),
  "div3": document.querySelector('#rodape > div:nth-child(3) > a')
};
var bigNumbers = {
  "div": document.querySelector('section#numeroFirstGroup > div:nth-of-type(1)'),
  "number1": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)'),
  "number2": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)'),
  "number3": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2)'),
  "number4": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2)'),
  "number5": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2)'),
  "number6": document.querySelector('section#numeroFirstGroup > div:nth-of-type(2) > div:nth-of-type(6) > div:nth-of-type(2)')
};
var distancia = {
  "geral": {
    "div1": getPosition(geral.div1).y,
    "div2": getPosition(geral.div2).y,
    "div3": getPosition(geral.div3).y,
    "div4": getPosition(geral.div4).y
  },
  "ett_first": {
    "div2": getPosition(ett_first.div2).y,
    "div3": getPosition(ett_first.div3).y,
    "button": getPosition(ett_first.button).y
  },
  "shift": {
    "div2": getPosition(shift.div2).y,
    "div3": getPosition(shift.div3).y
  },
  "recruit": {
    "div2": getPosition(recruit.div2).y,
    "div3": getPosition(recruit.div3).y
  }
};
var numbers_control = false;
var geral_control = false;
var ett_first_control = false;
var shift_control = false;
var recruit_control = false;
window.addEventListener("mousewheel", function () {
  var el1 = document.querySelector('section#geral');
  var numero1 = getOffset(el1);
  if (numero1 < 120 && geral_control == false) {
    var _geral$div;
    geral_control == true;
    geral === null || geral === void 0 ? void 0 : (_geral$div = geral.div4) === null || _geral$div === void 0 ? void 0 : _geral$div.classList.add("fadeInDown");
  }
  var el2 = document.querySelector('section#ett_first');
  var numero2 = getOffset(el2);
  if (numero2 < 120 && ett_first_control == false) {
    var _ett_first$div;
    ett_first_control == true;
    ett_first === null || ett_first === void 0 ? void 0 : (_ett_first$div = ett_first.div1) === null || _ett_first$div === void 0 ? void 0 : _ett_first$div.classList.add("fadeInDown");
  }
  var el3 = document.querySelector('section#shift');
  var numero3 = getOffset(el3);
  if (numero3 < 120 && shift_control == false) {
    var _shift$div;
    shift_control == true;
    shift === null || shift === void 0 ? void 0 : (_shift$div = shift.div1) === null || _shift$div === void 0 ? void 0 : _shift$div.classList.add("fadeInDown");
  }
  var el4 = document.querySelector('section#recruit');
  var numero4 = getOffset(el4);
  if (numero4 < 120 && recruit_control == false) {
    var _recruit$div;
    recruit_control == true;
    recruit === null || recruit === void 0 ? void 0 : (_recruit$div = recruit.div1) === null || _recruit$div === void 0 ? void 0 : _recruit$div.classList.add("fadeInDown");
  }
  var el5 = document.querySelector('section#numeroFirstGroup');
  var numero5 = getOffset(el5);
  if (numero5 < 120 && numbers_control == false) {
    numbers_control = true;
    contagemNumerosFirst();
  }
});
/*
window.addEventListener("load", () => {
    comunicadoFraude();
});
*/
/*function contagemNumerosFirst() {
  $('.counter-value').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    }, {
      duration: 5000,
      easing: 'swing',
      step: function step() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function complete() {
        $this.text(this.countNum);
      }
    });
  });
}*/
function comunicadoFraude() {
  return _comunicadoFraude.apply(this, arguments);
}
function _comunicadoFraude() {
  _comunicadoFraude = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var idBlackScreen, modal, top, main;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return blackScreen();
        case 2:
          idBlackScreen = _context.sent;
          modal = criarElement({
            "attributes": {
              "class": "fadeInDown modal comunicado"
            },
            "parent": idBlackScreen,
            "tag": "div"
          });
          top = criarElement({
            "id": false,
            "attributes": {
              "class": "modal_top comunicado_top"
            },
            "parent": modal.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "texto": "IMPORTANTE",
            "selector": true,
            "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
            "tag": "div"
          });
          criarElement({
            "id": false,
            "attributes": {
              "class": "modal_close",
              "onClick": "fadeOutBlackScreen();"
            },
            "texto": "X",
            "selector": true,
            "parent": document.querySelector("div#" + modal.id + " > div.modal_top"),
            "tag": "div"
          });
          main = criarElement({
            // "id": false,
            "attributes": {
              "class": "modal_main"
            },
            "parent": modal.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "texto": "Em atenção aos colaboradores e clientes da empresa, viemos a público informar que respeitamos todos os protocolos de recrutamento, seleção e boas práticas de mercado.",
            "parent": main.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "texto": "Nos últimos dias tivemos nosso nome envolvido em falsas oportunidades de emprego, com pré-requisitos que vão contra todos os valores e premissas da empresa. Em nossos 24 anos de trajetória, prezamos pela transparência em todos os nossos processos e serviços, com respeito a todos os nossos stakeholders. Com isso, informamos que nenhuma vaga divulgada por nossa empresa possui restrição de gênero, raça, opção sexual, formas estéticas e quaisquer formas de preconceito.",
            "parent": main.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "texto": "Somente divulgamos vagas através de nosso site, de redes sociais e de sites de recrutamento e qualquer outro meio não deve ser considerado. NÃO Fazemos divulgação de vagas através de WhatsApp.",
            "parent": main.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "parent": main.id,
            "tag": "div"
          });
          criarElement({
            "id": false,
            "attributes": {
              "src": "/img_aws/firstrh_group_logo-en.png"
            },
            "selector": true,
            "parent": document.querySelector("div.comunicado div.modal_main >div:last-of-type"),
            "tag": "img"
          });
          setTimeout(function () {
            document.getElementById(idBlackScreen).classList.remove('fadeOutBlackScreen');
          }, 100);
          return _context.abrupt("return", modal.id);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _comunicadoFraude.apply(this, arguments);
}
function oportunidadesForm() {
  return _oportunidadesForm.apply(this, arguments);
}
function _oportunidadesForm() {
  _oportunidadesForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var idBlackScreen;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return blackScreen();
        case 2:
          idBlackScreen = _context2.sent;
          _context2.next = 5;
          return criarModal({
            "idBlackScreen": idBlackScreen,
            "top": {
              "color": "#007bff",
              "texto": "Oportunidades de Trabalho"
            },
            "main": {
              "color": "#007bff"
            }
          });
        case 5:
          _context2.next = 7;
          return criarElement({
            "attributes": {
              "w3-include-html": "oportunidadesForm.html"
            },
            "selector": true,
            "parent": document.querySelector("div.modal_main"),
            "tag": "div"
          });
        case 7:
          _context2.next = 9;
          return includeHTML();
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _oportunidadesForm.apply(this, arguments);
}
function trocaLingua(lingua) {
  var lingua = JSON.parse(localStorage.getItem('firstrh-' + lingua));
  document.querySelector('div#menuSuspenso a:nth-of-type(1)').innerHTML = lingua.header.quemSomos;
  document.querySelector('div#menuSuspenso a:nth-of-type(2)').innerHTML = lingua.header.oportunidades;
  document.querySelector('div#menuSuspenso a:nth-of-type(3)').innerHTML = lingua.header.portal;
  document.querySelector('div#menuSuspensoMobile a:nth-of-type(1)').innerHTML = lingua.header.quemSomos;
  document.querySelector('div#menuSuspensoMobile a:nth-of-type(2)').innerHTML = lingua.header.oportunidades;
  document.querySelector('div#menuSuspensoMobile a:nth-of-type(3)').innerHTML = lingua.header.portal;
  document.querySelector('section.main div:nth-of-type(1)').innerHTML = lingua.main[0];
  document.querySelector('section.main div:nth-of-type(2)').innerHTML = lingua.main[1];
  document.querySelector('section.main div:nth-of-type(3)').innerHTML = lingua.main[2];
  document.querySelector('section.main div:nth-of-type(4)').innerHTML = lingua.main[3];
  document.querySelector('section.main button:nth-of-type(1)').innerHTML = lingua.main[4];
  geral.div1.innerHTML = lingua.geral[0];
  geral.div2.innerHTML = lingua.geral[1];
  geral.div3.innerHTML = lingua.geral[2];
  ett_first.div2.innerHTML = lingua.ett_first[0];
  ett_first.div3.innerHTML = lingua.ett_first[1];
  ett_first.button.innerHTML = lingua.ett_first[2];
  shift.div2.innerHTML = lingua.shift[0];
  shift.div3.innerHTML = lingua.shift[1];
  recruit.div2.innerHTML = lingua.recruit[0];
  recruit.div3.innerHTML = lingua.recruit[1];
  endereco.div1.innerHTML = lingua.endereco[0];
  endereco.div2.innerHTML = lingua.endereco[1];
  endereco.div3.innerHTML = lingua.endereco[2];
  bigNumbers.div.innerHTML = lingua.numeros[0];
  bigNumbers.number1.innerHTML = lingua.numeros[1];
  bigNumbers.number2.innerHTML = lingua.numeros[2];
  bigNumbers.number3.innerHTML = lingua.numeros[3];
  bigNumbers.number4.innerHTML = lingua.numeros[4];
  bigNumbers.number5.innerHTML = lingua.numeros[5];
  bigNumbers.number6.innerHTML = lingua.numeros[6];
}
function criarElement(objeto) {
  var elementoCriado = document.createElement(objeto.tag);
  if (objeto.id == null) {
    objeto.id = 'id-' + getRandomInt(10000000, 99999999);
  }
  if (objeto.id !== false) {
    elementoCriado.setAttribute("id", objeto.id);
  }
  if (objeto.attributes != null) {
    var attributes = Object.entries(objeto.attributes);
    attributes.forEach(function (val) {
      if (val[0] == 'required') {
        if (val[1] == false) {
          elementoCriado.removeAttribute("required");
        } else {
          elementoCriado.setAttribute("required", true);
        }
      } else if (val[0] == 'disabled') {
        if (val[1] == false) {
          elementoCriado.removeAttribute("disabled");
        } else {
          elementoCriado.setAttribute("disabled", true);
        }
      } else if (val[0] == 'checked') {
        if (val[1] == false) {
          elementoCriado.setAttribute("checked", false);
        } else {
          elementoCriado.setAttribute("checked", true);
        }
      } else if (val[0] == 'selected') {
        if (val[1] == false) {
          elementoCriado.setAttribute("selected", false);
        } else {
          elementoCriado.setAttribute("selected", true);
        }
      } else {
        elementoCriado.setAttribute(val[0], val[1]);
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
  } else {
    var elementoDestino = document.getElementById(objeto.parent);
  }
  if (objeto.target == 'before') {
    elementoDestino.before(elementoCriado);
  } else if (objeto.target == 'after') {
    elementoDestino.after(elementoCriado);
  } else {
    if (objeto.posicao == 'prepend') {
      elementoDestino.prepend(elementoCriado);
    } else {
      elementoDestino.appendChild(elementoCriado);
    }
  }
  return {
    "id": objeto.id
  };
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getCEP(cep) {
  $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function (data) {
    return data;
  });
}
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    var _ref = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref[0];
    array[randomIndex] = _ref[1];
  }
  return array;
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
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}