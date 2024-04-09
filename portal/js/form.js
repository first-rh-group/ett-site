document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('perfil-btn').addEventListener('click', function() {
        var cpf = localStorage.getItem('cpf'); // Obtenha o CPF do armazenamento local
        console.log(cpf); // Imprime o CPF no console
        if (cpf) {
            // Use a URL do seu servidor
            fetch('http://localhost:8080/projeto_ett/portal/session/form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cpf: cpf })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    // Armazena os dados no localStorage
                    localStorage.setItem('userData', JSON.stringify(data));
                    // Redireciona para a nova página
                    window.location.href = 'usuarioForm.html';
                } else {
                    console.error('Data is null');
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            console.error('CPF is null');
        }
    });
});