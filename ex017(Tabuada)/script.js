function gerarTabuada() {
    let numero = document.querySelector('input#txtnumero');
    let tabuada = document.querySelector('select#resultado');
        
    if (numero.value.length == 0) {
        alert('Digite um número para gerar a tabuada!');       
    }else {
        let n = Number(numero.value);    
        tabuada.innerHTML = '';
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tabuada${i}`;  // para criar um id para PHP 
            tabuada.appendChild(item);
        }
    }
}

   

