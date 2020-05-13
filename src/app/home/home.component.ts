import { Component, OnInit } from '@angular/core';
import { IProject } from '../project-detail/projects';
import { ProjectsService } from '../project-detail/projects.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Project: IProject[];
  contactForm: FormGroup;
  constructor( private projectsService: ProjectsService,
               private serviceTheme: ThemeService ) { }

  ngOnInit(): void {
    this.Project = this.projectsService.getProjects();

    // Setting up my contact form object manually
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null , [Validators.required , Validators.email]),
      subject: new FormControl(null, [Validators.required,  Validators.minLength(10)])
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  toggleTheme(): void {
    this.serviceTheme.toggle();
    console.log(this.serviceTheme.activeTheme());

  }
}
