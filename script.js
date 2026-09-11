document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('orcamentoForm').addEventListener('submit',function(e){
  e.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  const bairro=document.getElementById('bairro').value.trim();
  const servico=document.getElementById('servico').value.trim();
  const msg=`Olá, meu nome é ${nome}. Vim pelo site da Lavame Plus. Gostaria de um orçamento para ${servico}. Meu bairro é ${bairro}.`;
  window.open(`https://wa.me/5521979511720?text=${encodeURIComponent(msg)}`,'_blank','noopener');
});