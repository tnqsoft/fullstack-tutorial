import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customEmail'
})
export class CustomEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
