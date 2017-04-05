import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Project } from './../project.model';
import { ProjectTileComponent } from './../project-tile/project-tile.component';
import { ProjectService } from './../project.service';
import { GoalPipe } from './../goal.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects: Project[] = [];
  sortValue: string = "all";

  constructor(private projectService: ProjectService, private router: Router) {
    this.projectService.getProjects().subscribe(projectArray => {
      projectArray.forEach(project => {
        let newProject = new Project(project.name, project.description, project.owners, project.goal, project.rewards, project.currentAmount, project.$key);
        this.projects.push(newProject);
      })
    });
  }

  setSortValue(value: string) {
    this.sortValue = value;
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.id])
  }

}
