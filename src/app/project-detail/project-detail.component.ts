import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './../project.model';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  project;
  amountToAdd: number;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.project = this.projectService.getProjectById(this.projectId);
  }

  fund() {
    let projectObject: Project;
    this.project.subscribe(project => {
      projectObject = new Project(project.name, project.owners, project.description, project.goal, project.rewards, project.currentAmount, project.$key);
    });
    projectObject.currentAmount += this.amountToAdd;
    this.amountToAdd = null;
    this.projectService.update(projectObject);
  }

}
