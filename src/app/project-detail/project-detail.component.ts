import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  project;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let projectId;
    this.route.params.forEach((urlParameters) => {
      projectId = urlParameters['id'];
    });
    this.project = this.projectService.getProjectById(projectId);
  }

}
