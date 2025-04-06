import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-user-info',
  imports: [AvatarModule],
  template: `
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 text-yellow-600 font-semibold">
        <i class="pi pi-star-fill text-sm"></i>
        <span>{{ score() }}</span>
      </div>
      <p-avatar
        icon="pi pi-user"
        shape="circle"
        styleClass="bg-primary text-white"
        size="large"
      ></p-avatar>
      <span class="text-sm text-gray-800 font-medium">{{ username() }}</span>
    </div>
  `,
  styles: ``,
})
export class UserInfoComponent {
  username = input('Invité');
  score = input(152);
}
