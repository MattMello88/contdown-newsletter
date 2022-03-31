document.getElementById("dias").innerText = '';
document.getElementById("horas").innerText = '';
document.getElementById("minutos").innerText = '';
document.getElementById("segundos").innerText = '';

document.getElementById('retorno').innerText = '';

const dtFim = '2023-01-01';

function countdown() {
  const dtFinal = new Date(dtFim);
  const dtHoje = new Date();

  const base = Math.floor((dtFinal - dtHoje) / 1000);

  const dias = Math.floor(base / 3600 / 24);
  const horas = Math.floor((base / 3600) % 24);
  const minutos = Math.floor((base / 60) % 60);
  const segundos = Math.floor(base % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
  
}

setInterval(countdown, 1000);

document.getElementById('submitIncreverse').onsubmit = async (e) => {
  e.preventDefault();
  document.getElementById('retorno').innerText = '';
  console.log(e.target.elements.email.value);
  
  if(e.target.elements.email.value){
    const { newslatter, error } = await supabaseCli
      .from('newslatter')
      .insert([
        { email: e.target.elements.email.value },
      ])
    if(error)
      document.getElementById('retorno').innerText = error.message;
    else
      alert('Email cadastado com sucesso!')  ;
  } else {
    document.getElementById('retorno').innerText = 'Por favor, Preencher o E-mail';
  }

}