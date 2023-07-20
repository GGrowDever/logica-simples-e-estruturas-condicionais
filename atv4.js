const valueCar = Number(
	prompt(
		'Para cálculo de imposto e custo de fábrica, digite o valor do veículo'
	)
);
const custofabric = 0.28;
const imposto = 0.45;
const parcCusto = valueCar * custofabric;
const parcimposto = valueCar * imposto;
document.write(
	`O valor do custo de fábrica do veículo informado é de R$${parcCusto.toFixed(
		2
	)}, e o valor de impostos é de R$${parcimposto}`
);
