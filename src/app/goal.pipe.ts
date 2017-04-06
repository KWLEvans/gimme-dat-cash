import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'goal'
})
export class GoalPipe implements PipeTransform {

  transform(input: any[], sortValue: string) {
    if (input) {
      if (sortValue === "high") {
        let output: any[] = [];
        input.forEach(project => {
          if (project.goal > 400000) {
            output.push(project);
          }
        });
        return output;
      } else if (sortValue === "low") {
        let output: any[] = [];
        input.forEach(project => {
          if (project.goal < 400000) {
            output.push(project);
          }
        });
        return output;
      } else {
        return input;
      }
    }
  }

}
