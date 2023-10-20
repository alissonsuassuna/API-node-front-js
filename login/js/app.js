document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

   
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch('http://localhost:3000/listar-clients')
        .then(response => response.json())
        .then(data => {
            console.log(data[0].email)
            console.log(data[0].senha)

            if (email === data[0].email && senha === data[0].senha) {
                // Redireciona para uma nova página
                window.location.href = "welcome.html";
            } else {
                alert("Por favor, preencha o nome e o email corretamente.");
            }

            
        })
        .catch(error => {
            console.log('deu ruim', error)
        })
});


/*document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

    const dbEmail = 'alisson@gmail.com'
    const dbSenha = '123'
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Exibe os valores no console
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);

    if (email === dbEmail && senha === dbSenha) {
        // Redireciona para uma nova página
        window.location.href = "welcome.html";
    } else {
        alert("Por favor, preencha o nome e o email corretamente.");
    }
});*/


/*

        <input type="submit" value="Entrar" onClick="capturarDados()">
    </form>

    <script>
        function capturarDados() {
            // Captura os valores dos campos de e-mail e senha
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;

            // Exibe os valores no console
            console.log("E-mail: " + email);
            console.log("Senha: " + senha);
        }
    </script>

*/