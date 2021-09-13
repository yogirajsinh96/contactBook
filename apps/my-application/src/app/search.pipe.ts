import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchTerm: string): any {
    return value.filter(function (search: any) {
      return (
        search.contatcName
          .toLowerCase()
          .indexOf(searchTerm.toString().toLowerCase()) > -1 ||
        search.email
          .toLowerCase()
          .indexOf(searchTerm.toString().toLowerCase()) > -1 ||
        search.contactMobile.indexOf(searchTerm.toString()) > -1
      );
    });
  }
}
