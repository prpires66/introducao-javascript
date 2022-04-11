var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <0 || peso > 1000) {
        console.log("Peso inválido!")
        pesoEhValido = false;
        paciente.classList.add("peso-invalido");
    }
    if (altura <0 || altura > 3.00) {
        console.log("Altura inválida!")
        paciente.classList
        alturaEhValida = false;
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "erro";
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "sdsdsd";
});

