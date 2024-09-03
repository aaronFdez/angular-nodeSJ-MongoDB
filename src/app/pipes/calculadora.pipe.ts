import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora',
  standalone: true
})
export class CalculadoraPipe implements PipeTransform {
  transform(value: any, value_two: any): string {
    return `
        Suma: ${value + value_two} -
        Resta: ${value - value_two} -
        Multiplicación: ${value * value_two} -
        División: ${value / value_two}
    `;
  }
}
