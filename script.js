// Selecionando os dois campos capital e siglas frm1
const frm1_Select_cid = document.getElementById("estados-brasil");
const sg = document.querySelector("#sg-estado");
const frm2_Select_cid = document.getElementById("frm2_Select_cid");
const frm2_Select_cid_abrev = document.getElementById("frm2_Select_cid_abrev");


function clonarCidade(selCid, siglaEstadoFrm1, siglaEstadoFrm2, cloneForm2) {
  selCid.addEventListener("click", () => {
    Array.from(selCid).forEach((item) => {
      if (item.value === selCid.value) {
        siglaEstadoFrm1.value = item.value;
        siglaEstadoFrm2.value = siglaEstadoFrm1.value;
        cloneForm2.value = item.innerText;
      }
    });
  });
}
//Selecionar campos a copiar
const nomeAtletaFrm1 = document.getElementById('nomeFrm1')
const identidadeFrm1 = document.getElementById('idtFrm1')
const posicaoFrm1 = document.getElementById('posFrm1')
const dtNascimentoFrm1 = document.getElementById('dtNascFrm1')
const indicacaoFrm1 = document.getElementById('indFrm1')
const ultClubeFrm1 = document.getElementById('ultClubeFrm1')
const indFluFrm1 = document.getElementById('indFluFrm1')
const necessidadesFrm1 = document.querySelectorAll('#necessidadesFrm1 input')
const pePreferencialFrm1 = document.querySelectorAll('#pePreferencialFrm1 input')



// Selecionar campos a serem clonados
const nomeAtletaFrm2 = document.getElementById('nomeFrm2')
const identidadeFrm2 = document.getElementById('idtFrm2')
const posicaoFrm2 = document.getElementById('posFrm2')
const dtNascimentoFrm2 = document.getElementById('dtNascfrm2')
const indicacaoFrm2 = document.getElementById('indFrm2')
const ultClubeFrm2 = document.getElementById('ultClubeFrm2')
const indFluFrm2 = document.getElementById('indFluFrm2')
const necessidadesFrm2 = document.querySelectorAll('#necessidadesFrm2 input')
const pePreferencialFrm2 = document.querySelectorAll('#pePreferencialFrm2 input')


const vetor =[[nomeAtletaFrm1,nomeAtletaFrm2],[identidadeFrm1,identidadeFrm2],[posicaoFrm1,posicaoFrm2],[dtNascimentoFrm1,dtNascimentoFrm2],[indicacaoFrm1,indicacaoFrm2],[ultClubeFrm1,ultClubeFrm2],[indFluFrm1,indFluFrm2]]


function clonarCampos([cmpSelecionado,cmpCopiado]){  
  cmpSelecionado.addEventListener('keyup', () => {    
    cmpCopiado.value = cmpSelecionado.value    
  })  
}
clonarCidade(frm1_Select_cid, sg, frm2_Select_cid_abrev, frm2_Select_cid);

//  clonarCampos(nomeAtletaFrm1,nomeAtletaFrm2)

vetor.forEach(clonarCampos)

// for (let index = 0; index < vetor.length; index++) {
//   const [cmpSelecionado,cmpCopiado]  = vetor[index];
//   clonarCampos(cmpSelecionado,cmpCopiado)
// }

   
