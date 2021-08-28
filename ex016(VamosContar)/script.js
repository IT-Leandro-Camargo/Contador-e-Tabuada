function contar() {
    let inicio = document.getElementById('txtinicio');    //ou let inicio = document.querySelector('input#txtinicio'); 
    let fim = document.getElementById('txtfim');   //ou let fim = document.querySelector('input#txtfim');   
    let passo = document.getElementById('txtpasso');   //ou let passo = document.querySelector('input#txtpasso');     
    let resultado = document.getElementById('resultado'); //let resultado = document.querySelector('div#resultado'); 
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        // window.alert('[ERRO] Informe os dados corretamente');  
        resultado.innerHTML = 'Impossível contar';  
    }else{
        resultado.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1');
            p = 1;
        }
        if(i < f){
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `;  // o código unicode  deve estar entre crases   \u{1F449} é o emoji de um sorriso
            }            
        }else if(i > f){
           for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `;
            }
        // }else{
        //     window.alert('[ERRO] Informe um valor para "Passo" diferente de ZERO');
        }
        resultado.innerHTML += `\u{1F3C1}`;   // o código unicode \u{1F3C1} é o emoji de uma bandeira quadriculada
    }    
} 
