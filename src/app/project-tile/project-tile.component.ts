import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../project.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
