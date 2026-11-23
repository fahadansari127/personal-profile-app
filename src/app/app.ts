import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';
import { Profile } from './models/profile-card/Profile';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly profile = signal<Profile>({
    name: 'John',
    role : 'Frontend Developer'
  });
  protected readonly skills = signal(['Angular', 'TypeScript', 'RxJS', 'CSS']);

  addSkill(skill:string) {
    if (!this.skills().includes(skill)) {
      this.skills.update((list) => [...list, skill]);
    }
  }
   
}
