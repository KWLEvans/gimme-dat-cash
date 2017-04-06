import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './../project.model';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {

  @Input() project;
  editMode: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  addOwner(owner: string) {
    this.project.owners.push(owner);
  }

  addReward(reward: string) {
    this.project.rewards.push(reward);
  }

  submitForm(project) {
    this.projectService.update(project);
    this.setEditMode(false);
  }

  setEditMode(value: boolean) {
    this.editMode = value;
  }
}
