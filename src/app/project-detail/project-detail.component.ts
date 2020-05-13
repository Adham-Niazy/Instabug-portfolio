import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { IProject } from './projects';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: number;
  selectedProject: IProject;
  constructor(
               private route: ActivatedRoute ,
               private projectsService: ProjectsService ,
               private navigation: Router
              ) { }

  ngOnInit(): void {
    this.projectId = +this.route.snapshot.paramMap.get('id');
    this.selectedProject = this.projectsService.getProject(this.projectId-1);
  }

  onBack(): void {
    this.navigation.navigate(['/Home']);
  }

}
