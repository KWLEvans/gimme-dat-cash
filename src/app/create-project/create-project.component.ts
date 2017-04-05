import { Component } from '@angular/core';
import { Project } from './../project.model';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent {

  owners: string[] = [];
  rewards: string[] = [];

  constructor(private projectService: ProjectService) { }

  addOwner(owner: string) {
    this.owners.push(owner);
  }

  addReward(reward: string) {
    this.rewards.push(reward);
  }

  submitForm(name: string, description: string, goal: number) {
    let newProject = new Project(name, this.owners, description, goal, this.rewards);
    this.projectService.saveProject(newProject);
    this.owners = [];
    this.rewards = [];
  }
}
