import { Component, OnInit } from '@angular/core';
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

  projects: FirebaseListObservable<any[]>;
  sortValue: string = "all";

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  setSortValue(value: string) {
    this.sortValue = value;
  }

}
