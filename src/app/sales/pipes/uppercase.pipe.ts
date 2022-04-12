import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (args[0]) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }
}
