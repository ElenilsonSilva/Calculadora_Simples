//Elenilson Silva
function Button(number)
{ 
	var salvo = document.calculadora.visor.value;
	document.calculadora.visor.value = salvo + number;

}

function reset()
{
	
	document.calculadora.visor.value = " ";
	
}

function result()
{
	var visor = document.calculadora.visor.value;
	
	var total = eval(visor);
	document.calculadora.visor.value = total;	
}





