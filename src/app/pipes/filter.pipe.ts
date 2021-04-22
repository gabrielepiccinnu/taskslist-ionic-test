import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(taskList: List[], completed: boolean = true): List[] {
    return taskList.filter( item => item.finished === completed);
  }

}
