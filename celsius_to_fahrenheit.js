/*
Celsius to Fahrenheit
Descrição
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
 */

// transform('50F')
function transformDegre(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // fluxo de erro
  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // fluxo ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = 'C' 

  // fluxo alternativo C -> F
  if(celsiusExists){
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
  formula = celsius => celsius * 9/5 + 32
  degreeSign = 'F' 
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegre('10C'))
  console.log(transformDegre('50F'))
  transformDegre('50Z')
} catch (error) {
  console.log(error.message)
}