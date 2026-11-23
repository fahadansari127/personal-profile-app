import { Component, input, output, signal } from '@angular/core';
import { Profile } from '../models/profile-card/Profile';
import { SkillChip } from '../skill-chip/skill-chip';

@Component({
  imports: [SkillChip],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {

  readonly profile = input.required<Profile>();
  readonly skills = input.required<string[]>();

  readonly profileChange = output<Profile>();
  readonly skillAdded = output<string>();
  // readonly skillRemoved = output<string>();

  protected readonly editing = signal(false);

  save(name: string, role: string) {
    this.profileChange.emit({
      name: name,
      role: role
    });
    this.editing.set(false);
  }

  addSkill(input: HTMLInputElement) {
    const value = input.value.trim();
    if(value) this.skillAdded.emit(value);
    input.value = '';
  }

}
