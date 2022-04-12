import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly',
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): string {
    return value ? 'flies' : "doesn't fly";
  }
}
