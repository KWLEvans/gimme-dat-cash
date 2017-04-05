import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Project } from './../project.model';
import { ProjectTileComponent } from './../project-tile/project-tile.component';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

}
