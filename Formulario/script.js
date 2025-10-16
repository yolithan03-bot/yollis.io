// Validação de senha do exercício 8
function validarSenha() {
  const senha = document.getElementById("senha8").value;
  const conf = document.getElementById("confSenha").value;
  if (senha !== conf) {
    alert("As senhas não coincidem!");
    return false;
  }
  return true;
}

// Passos do formulário multi-etapas (exercício 10)
function nextStep(i) {
  const steps = document.querySelectorAll("#multi fieldset");
  steps[i].style.display = "none";
  steps[i + 1].style.display = "block";
}
function prevStep(i) {
  const steps = document.querySelectorAll("#multi fieldset");
  steps[i + 1].style.display = "none";
  steps[i].style.display = "block";
}
