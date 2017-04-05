import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = this.angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }

  saveProject(project: Project) {
    this.projects.push(project);
  }

  update(localUpdatedProject: Project) {
    let albumEntryInFirebase = this.getProjectById(localUpdatedProject.id);
    albumEntryInFirebase.update({currentAmount: localUpdatedProject.currentAmount,
                                name: localUpdatedProject.name,
                                description: localUpdatedProject.description,
                                owners: localUpdatedProject.owners,
                                goal: localUpdatedProject.goal,
                                rewards: localUpdatedProject.rewards
                                });
  }
}
