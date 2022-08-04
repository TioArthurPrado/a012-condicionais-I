let nacionalidade = prompt('Escreva aqui sua nacionalidade.').toLocaleLowerCase

const respNacionalidade = nacionalidade;

/* NACIONALIDADES ACEITAS
Brasileira
Argentina
Uruguaia
Chilena
Colombiana */

if(respNacionalidade === 'Brasileira' || respNacionalidade === 'Argentina' || respNacionalidade === 'Uruguaia' || respNacionalidade === 'Chilena' || respNacionalidade === 'Colombiana'){
    console.log('Sua nacionalidade é é:', respNacionalidade)
}else{
    console.log('Nacionalidade não encontrada')
}