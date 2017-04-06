import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './../project.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {
  @Input() project: Project;
  currentRoute;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }
}
