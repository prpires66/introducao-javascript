var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form);
    // Criando a tr e td do paciente
    var pacienteTr = montaTr(paciente); 
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});   

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(pacientes) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(pacientes.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pacientes.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pacientes.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pacientes.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pacientes.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}