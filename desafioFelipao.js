function calculadoraPartidasRankd(derrotas, vitorias){
    let calcular = vitorias - derrotas
    return calcular
}

let resultado = calculadoraPartidasRankd(10, 80)
let rank 

while (true){ 
    if (resultado < 10){
        rank = ("Ferro")
    }
    else if (resultado > 10 && resultado <= 20){
        rank = ("Bronze")
    }
    else if (resultado > 20 && resultado <= 50){
        rank = ("Prata")
    }
    else if (resultado > 50 && resultado <= 80){
        rank = ("Ouro")
    }
    else if (resultado > 80 && resultado <=90){
        rank = ("Diamante")
    }
    else if (resultado > 90 && resultado <= 100){
        rank = ("Lendário")
    }
    else if (resultado >= 101){
        rank = ("Imortal")
    }
    break
}

console.log("O herói tem um saldo de " + (resultado) + " vitórias e está no nível " + (rank))