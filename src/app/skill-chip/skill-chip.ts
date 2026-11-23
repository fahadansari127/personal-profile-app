import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skill-chip',
  styleUrl: './skill-chip.css',
  templateUrl: './skill-chip.html',
})
export class SkillChip {

  readonly label = input.required<string>();
}
