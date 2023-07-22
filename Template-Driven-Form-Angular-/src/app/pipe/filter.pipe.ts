import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    console.log(value);
    if (!args) return value;
    console.log(args);
    
    args = args.toLowerCase();
    return value.map((item: any) => {
      const matchedItem: any = {};
      let isMatched = false;
      Object.keys(item).forEach(key => {
        const fieldValue = item[key].toString().toLowerCase();
        const startIndex = fieldValue.indexOf(args);

        if (startIndex !== -1) {
          const endIndex = startIndex + args.length;
          const highlightedValue = 
            item[key].toString().slice(0, startIndex) +'<mark>' +
            item[key].toString().slice(startIndex, endIndex) +'</mark>' +
            item[key].toString().slice(endIndex);
            console.log(highlightedValue);
            
          matchedItem[key] = highlightedValue;
          console.log(matchedItem);
          
          isMatched = true;
        } 
        else {
          matchedItem[key] = item[key];
        }
      });

      return isMatched ? matchedItem : null;
    }).filter((item:any) => item !== null);
  }
}
