// Atividade 1 - Botão Alerta
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("botao-alerta").addEventListener("click", function() {
                alert("Hello World");
            });
        });
// Atividade 2 - Botão Mudar Título
document.getElementById("botao-mudar-titulo").addEventListener("click", function(){
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = "Novo Título Modificado!";
        titulo.style.color = "#c300ff";
    }
});

// Atividade 3 - Botão Mudar Cor do Plano de Fundo
document.getElementById("botao-mudar-estilo").addEventListener("click", function() {
    const form = document.getElementById("formulario");
    if (form) {
        form.style.backgroundColor = "#c300ff"; 
    }
});

// Atividade 4 - Botão Esconder/Mostrar o Formulário
document.getElementById("botao-esconder-form").addEventListener("click", function() {
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.hidden = !formulario.hidden;
    }
});

// Atividade 5 - Função Validar campos com cores
document.getElementById("botao-validar-dinamico").addEventListener("click", function() {
    const nome = document.getElementById("nome");
    if (nome.value.trim() === "") {
        nome.style.borderColor = "red";
    } else {
        nome.style.borderColor = "green";
    }
    
    const idade = document.getElementById("idade");
    if (idade.value.trim() === "") {
        idade.style.borderColor = "purple";
    } else {
        idade.style.borderColor = "#c300ff"; 
    }
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
        email.style.borderColor = "blue";
    } else {
        email.style.borderColor = "orange";
    }
});

// Atividade 6 - Botão Exibir dados 
document.getElementById("botao-dados").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    if (nome && idade && email) {
        mensagem.className = "concluido";
        mensagem.innerHTML = `Cadastro concluído!<br>Nome: ${nome}<br>Idade: ${idade}<br>Email: ${email}`;
    } else {
        mensagem.className = "erro";
        mensagem.textContent = "Preencha todos os campos!";
    }
});

// Atividade 7 - Operações Matemáticas 
document.addEventListener('DOMContentLoaded', function() {
        
// Atividade 7.1 - Botão de Soma
    document.getElementById("botao-calcular").addEventListener("click", function() {
        calcularOperacao((a, b) => a + b, "+");
    });

        // Atividade 7.2 - Botão de Subtração
    document.getElementById("botao-diminuir").addEventListener("click", function() {
            calcularOperacao((a, b) => a - b, "-");
        });
        // Atividade 7.3 - Botão de Multiplicação
    document.getElementById("botao-multiplicar").addEventListener("click", function(){
            calcularOperacao((a, b) => a * b, "*");
        });
        // Função auxiliar para operações da calculadora
        function calcularOperacao(operacao, simbolo) {
            const n1 = parseFloat(document.getElementById("n1").value) || 0;
            const n2 = parseFloat(document.getElementById("n2").value) || 0;
            const resultado = operacao(n1, n2);
            
            // Exibe o resultado no input
            const resultadoInput = document.getElementById("resultado");
            resultadoInput.value = resultado;

        }
    });