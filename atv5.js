// const altura = parseFloat(prompt('Digite sua Altura: '));
// const peso = parseFloat(prompt('Digite seu Peso: '));

// const imc = peso / (altura * altura);

// switch (true) {
// 	case imc < 18.5:
// 		document.write('Você está abaixo do peso ideal!!');
// 		break;
// 	case imc > 24.99:
// 		document.write('Você está acima da faixa de peso ideal!!');
// 		break;
// 	case imc >= 18.5 && imc <= 24.99:
// 		document.write('Você está dentro da faixa de peso ideal!!');
// 		break;

// 	default:
// 		document.write('IMC Inválido');
// 		break;

// 	document.write(`Seu IMC é ${imc}`);
	
// }

/* OU com IF que seria mais correto */



const altura = parseFloat(prompt('Digite sua Altura: '));
const peso = parseFloat(prompt('Digite seu Peso: '));

const imc = peso / (altura * altura);

if (imc < 18.5) {
     document.write('Você está abaixo do peso ideal!!');
}else if (imc > 24.99) {
     document.write('Você está acima do peso ideal!!');
}else {
     document.write('Você está dentro do peso ideal!!');
}

document.write(`Seu IMC é ${imc}`);