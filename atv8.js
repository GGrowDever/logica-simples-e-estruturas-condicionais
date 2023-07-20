const idade = Number(prompt('Digite a idade do atleta: '));
const peso = Number(prompt('Digite o peso do atleta: '));

if (idade <= 12) {
	console.log('Categoria: Infantil');
} else if (idade >= 13 && idade <= 16) {
	if (peso <= 40) {
		document.write('Categoria: Juvenil leve');
	} else {
		document.write('Categoria: Juvenil pesado');
	}
} else if (idade >= 17 && idade <= 24) {
	if (peso <= 45) {
		document.write('Categoria: Sênior leve');
	} else if (peso > 45 && peso <= 60) {
		document.write('Categoria: Sênior médio');
	} else {
		document.write('Categoria: Sênior pesado');
	}
} else {
	document.write('Categoria: Veterano');
}
