import { Injectable } from '@angular/core';
import { IProject } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private Projects: IProject[] = [
    {
      id: 1,
      name: 'Natours',
      images: [
               '../../assets/Imgs/Projects/Natours-1.png',
               '../../assets/Imgs/Projects/Natours-2.png',
               '../../assets/Imgs/Projects/Natours-3.png'
              ],
      projectLink: 'https://github.com/Adham-Niazy/Natours_AdvancedCSS',
      description: `This project was another challenge to me cause I applied in it tons of Advanced CSS3 properties like
                    mask, blend-mode and etc..`,
      usedFeatures: ['HTML/HTML5', 'CSS/CSS3', 'SCSS', 'SVG'],
      time: 3,
      typeOfTime: 'Days'
    },
    {
      id: 2,
      name: 'Trillo',
      images: [
        '../../assets/Imgs/Projects/Trillo-1.png',
        '../../assets/Imgs/Projects/Trillo-2.png',
        '../../assets/Imgs/Projects/Trillo-3.png'
       ],
       projectLink: 'https://github.com/Adham-Niazy/Trillo_Angular_BookingApp',
       description: `This project is my favorite cause I applied all features I know in angular8 and this project
                     was a lot of experience for me. The main theme of the website was from Jonas course in Advanced
                     CSS3 but the other pages was my pure design inspiried of Jonas theme`,
       usedFeatures: ['Angular8', 'HTML5', 'CSS3', 'SCSS', 'SVG', 'Firebase'],
       time: 15,
       typeOfTime: 'Days'
    },
    {
      id: 3,
      name: 'Portfolio',
      images: [
        '../../assets/Imgs/Projects/Portfolio-1.JPG',
        '../../assets/Imgs/Projects/Portfolio-2.JPG',
        '../../assets/Imgs/Projects/Portfolio-3.JPG'
       ],
       projectLink: '',
       description: `This project was a task on me and a challange to finish it in just 11 Hours direct
                     without a break and this was an exam I got 99% in it`,
       usedFeatures: ['HTML5', 'CSS3', 'Bootstrap', 'JQeury'],
       time: 11,
       typeOfTime: 'Hours'
    }
  ];
  constructor() { }

  getProjects(): IProject[] {
    return this.Projects;
  }
  getProject(id: number): IProject {
    return this.Projects[id];
  }
}
