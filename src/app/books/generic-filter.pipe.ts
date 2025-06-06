import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericFilter',
  standalone: false,
})
export class GenericFilterPipe implements PipeTransform {
  transform(
    entries: any[],
    filterAttribute: string,
    filterValue: string
  ): any[] {
    filterValue = (filterValue || '').toLocaleLowerCase();
    entries = entries || [];

    const result = entries.filter((entry: any) => {
      const title = (entry[filterAttribute] || '').toLocaleLowerCase();
      return title.includes(filterValue);
    });

    return result;
  }
}
