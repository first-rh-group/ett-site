criarElement({
    "id":false,
    "attributes": {
        "class":"arquivosVinculados",
    },
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form`),
    "tag":"fieldset"
});
criarElement({
    "id":false,
    "textoHtml":"arquivos vinculados",
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
    "tag":"legend"
});
criarElement({
    "id":false,
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
    "tag":"div"
});
var idInputFile = criarElement({
    "attributes": {
        "class":"form-control",
        "multiple":"1",
        "capture":"capture",
        "accept":"application/pdf,image/png,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,txt,.odt,.rtf,.jpg,.jpeg,.xls,.xlsx,.pps,.ppsx,.pptx,.csv,.ogg",
        "type":"file",
        "name":"upload",
    },
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type > div`),
    "tag":"input"
})
criarElement({
    "id":false,
    "attributes":{
        "class":"btn btn-secondary",
        "type":"button",
    },
    "textoHtml":"Enviar",
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type > div`),
    "tag":"button"
});
var filesInput = document.getElementById(idInputFile.id)
filesInput.addEventListener('change',(e) => {
    if(e.target.files.length > 0) {
        e.target.nextElementSibling.classList.toggle('btn-secondary')
        e.target.nextElementSibling.classList.toggle('btn-success')
    } else {
        e.target.nextElementSibling.classList.toggle('btn-secondary')
        e.target.nextElementSibling.classList.toggle('btn-success')
        document.querySelector('progress#file_progress')?.remove()
    }
    // console.log(e.target.files)
})
filesInput.nextElementSibling.addEventListener('click',(e) => {
    if(filesInput.files.length > 0) {
        if(document.querySelector('progress#file_progress') == null) {
            criarElement({
                "id":"file_progress",
                "attributes":{
                    "type":"button",
                    "value":0.00001,
                    "max":100,
                },
                "textoHtml":"Enviar",
                "target":"after",
                "parent":idInputFile.id,
                "tag":"progress"
            })
        }
        var uri = "vagaOferecidaSendFiles.php";
        var xhr = new XMLHttpRequest();
        var ajaxData = new FormData();
        xhr.open("POST", uri, true);
        xhr.upload.addEventListener("progress", function(e) {
            if (e.lengthComputable) {
                document.getElementById('file_progress').value = Math.round((e.loaded * 100) / e.total);
            }
        }, false);
        xhr.upload.addEventListener("load", () => {
            document.getElementById('file_progress').style.filter = "invert(56%) sepia(17%) saturate(1929%) hue-rotate(82deg) brightness(91%) contrast(84%)";
            document.querySelector(`#form_vincularArquivo_${idElement} input`).value = '';
            document.querySelector(`#form_vincularArquivo_${idElement} button`).innerHTML = 'Enviado!';
            document.querySelector(`#form_vincularArquivo_${idElement} button`).classList.add('btn-success');
            document.querySelector(`#form_vincularArquivo_${idElement} button`).classList.remove('btn-secondary');

        }, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                console.log(result)
                if(result.fail.length > 0) {
                    var textoAtencao = [];
                    result.fail.forEach(erroObject => {
                        textoAtencao.push(`${erroObject.file} (${erroObject.erro})`)
                    })
                    informaAtencao('Os seguintes arquivos não foram guardados: '+textoAtencao.join(', '),8000)
                }
                // console.log(result)
                arquivosVinculadosConstructor(result.arquivosVinculados)
                if(result.success.length > 0) {
                    informaSucesso(`Upload com sucesso de ${result.success.length} arquivo${(result.success.length > 1 ? 's' : '')}`,4000)
                }
            }
        };
        Object.entries(files).forEach(([key, val]) => {
            ajaxData.append(key, val);
        });
        ajaxData.append('idVaga', objetoVaga.idVaga);
        ajaxData.append('userHash', localStorage.getItem('userHash'));
        xhr.send(ajaxData);
    } else {

    }
})
criarElement({
    "id":"arquivosvinculados",
    "selector":true,
    "parent":document.querySelector(`#${divPrincipal.id} > form > fieldset:last-of-type`),
    "tag":"div"
});