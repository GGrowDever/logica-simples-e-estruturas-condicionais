let saldo = 3000.00
const saque = Number(prompt("Digite o valor a retirar: "))
const taxa = 4.5

if (saque > 0 && saque %5 === 0) {
     if(saque + taxa <= saldo){
          saldo = saldo - (saque + taxa)
          document.write("Seu saldo disponível é de R$", saldo)
     }else{
          document.write("Saldo insuficiente!")
     }
}else {
     document.write("Valor inválido")
}