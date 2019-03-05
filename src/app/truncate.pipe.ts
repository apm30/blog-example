import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const limit = args;
    const trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
