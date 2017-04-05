import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'goal',
  pure: false
})
export class GoalPipe implements PipeTransform {

  transform(input: Project[], sortValue: string) {
    if (sortValue === "high") {
      let output = [];
      input.forEach(project => {
        if (project.goal > 400000) {
          output.push(project);
        }
      });
      return output;
    } else if (sortValue === "low") {
      let output = [];
      input.forEach(project => {
        if (project.goal < 400000) {
          output.push(project);
        }
      });
      return output;
    }else {
      return input;
    }
  }

}
