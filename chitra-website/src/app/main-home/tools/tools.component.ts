import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  techStack = [
    { name: 'Angular', icon: 'assets/angular.png' },
    { name: 'TypeScript', icon: 'assets/ts.png' },
    { name: 'JavaScript', icon: 'assets/js.png' },
    { name: 'PHP', icon: 'assets/php.png' },
    { name: 'Bootstrap', icon: 'assets/bootstrap.png' },
    { name: 'Figma', icon: 'assets/figma.png' },
    { name: 'Html/Css', icon: 'assets/html.png' },
    

  ];
}
