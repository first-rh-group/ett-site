"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
criarElement({
  "id": false,
  "attributes": {
    "class": "arquivosVinculados"
  },
  "selector": true,
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form")),
  "tag": "fieldset"
});
criarElement({
  "id": false,
  "textoHtml": "arquivos vinculados",
  "selector": true,
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
  "tag": "legend"
});
criarElement({
  "id": false,
  "selector": true,
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
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
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type > div")),
  "tag": "input"
});
criarElement({
  "id": false,
  "attributes": {
    "class": "btn btn-secondary",
    "type": "button"
  },
  "textoHtml": "Enviar",
  "selector": true,
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type > div")),
  "tag": "button"
});
var filesInput = document.getElementById(idInputFile.id);
filesInput.addEventListener('change', function (e) {
  if (e.target.files.length > 0) {
    e.target.nextElementSibling.classList.toggle('btn-secondary');
    e.target.nextElementSibling.classList.toggle('btn-success');
  } else {
    var _document$querySelect;
    e.target.nextElementSibling.classList.toggle('btn-secondary');
    e.target.nextElementSibling.classList.toggle('btn-success');
    (_document$querySelect = document.querySelector('progress#file_progress')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
  }
  // console.log(e.target.files)
});
filesInput.nextElementSibling.addEventListener('click', function (e) {
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
    var uri = "vagaOferecidaSendFiles.php";
    var xhr = new XMLHttpRequest();
    var ajaxData = new FormData();
    xhr.open("POST", uri, true);
    xhr.upload.addEventListener("progress", function (e) {
      if (e.lengthComputable) {
        document.getElementById('file_progress').value = Math.round(e.loaded * 100 / e.total);
      }
    }, false);
    xhr.upload.addEventListener("load", function () {
      document.getElementById('file_progress').style.filter = "invert(56%) sepia(17%) saturate(1929%) hue-rotate(82deg) brightness(91%) contrast(84%)";
      document.querySelector("#form_vincularArquivo_".concat(idElement, " input")).value = '';
      document.querySelector("#form_vincularArquivo_".concat(idElement, " button")).innerHTML = 'Enviado!';
      document.querySelector("#form_vincularArquivo_".concat(idElement, " button")).classList.add('btn-success');
      document.querySelector("#form_vincularArquivo_".concat(idElement, " button")).classList.remove('btn-secondary');
    }, false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var result = JSON.parse(xhr.responseText);
        console.log(result);
        if (result.fail.length > 0) {
          var textoAtencao = [];
          result.fail.forEach(function (erroObject) {
            textoAtencao.push("".concat(erroObject.file, " (").concat(erroObject.erro, ")"));
          });
          informaAtencao('Os seguintes arquivos não foram guardados: ' + textoAtencao.join(', '), 8000);
        }
        // console.log(result)
        arquivosVinculadosConstructor(result.arquivosVinculados);
        if (result.success.length > 0) {
          informaSucesso("Upload com sucesso de ".concat(result.success.length, " arquivo").concat(result.success.length > 1 ? 's' : ''), 4000);
        }
      }
    };
    Object.entries(files).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];
      ajaxData.append(key, val);
    });
    ajaxData.append('idVaga', objetoVaga.idVaga);
    ajaxData.append('userHash', localStorage.getItem('userHash'));
    xhr.send(ajaxData);
  } else {}
});
criarElement({
  "id": "arquivosvinculados",
  "selector": true,
  "parent": document.querySelector("#".concat(divPrincipal.id, " > form > fieldset:last-of-type")),
  "tag": "div"
});