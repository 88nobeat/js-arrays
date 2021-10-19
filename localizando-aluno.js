const nomes = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 7, 9, 6]

// includes -> booleano 
//indexOf -> retorna numero do indice, no caso é 3

let listaDeNotasEAlunos = [nomes, medias]

const exibeNomeNota = (NomeDoAluno) =>{
    if (listaDeNotasEAlunos[0].includes(NomeDoAluno)){
       let indice = listaDeNotasEAlunos[0].indexOf(NomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua média é "
        + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não cadastrado"
    }
}



console.log(exibeNomeNota("João"))