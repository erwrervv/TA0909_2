import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleContent'
})
export class ArticleContentPipe implements PipeTransform {

  transform(value: string, para: string="..."): string {
    return value.substring(0,3)+para;
  }

}
