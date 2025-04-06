import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  imports: [AvatarModule],
  template: `
    <div
      class="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between"
    >
      <!-- Logo ou titre -->
      <div class="flex items-center gap-2">
        <img src="assets/logo.png" alt="Logo" class="h-8 w-8" />
        <span class="text-xl font-bold text-gray-700">InfoQuiz</span>
      </div>

      <!-- Score et Pseudo -->
      <div class="flex items-center gap-6">
        <!-- Score -->
        <div class="flex items-center gap-2">
          <i class="pi pi-star-fill text-yellow-500 text-lg"></i>
          <span class="text-lg font-semibold text-gray-800">{{ score() }}</span>
        </div>

        <!-- Utilisateur -->
        <div class="flex items-center gap-2">
          <p-avatar
            icon="pi pi-user"
            shape="circle"
            styleClass="bg-primary-500 text-white"
            size="large"
          ></p-avatar>
          <span class="text-gray-700 font-medium">{{ username() }}</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  username = input('Invité');
  score = input(152);
}
