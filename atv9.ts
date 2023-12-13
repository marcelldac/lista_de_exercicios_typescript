//Criar uma função que converta uma temperatura de Fahrenheit para Celsius

function convertFahrenheitToCelsius(temperature: number): number {
  return ((temperature - 32) * 5) / 9;
}

console.log(convertFahrenheitToCelsius(10));
