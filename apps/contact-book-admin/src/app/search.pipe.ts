import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return value.filter(function (search: any) {
      return (
        search.contatcName
          .toLowerCase()
          .indexOf(args.toString().toLowerCase()) > -1
      );
    });
  }
}
