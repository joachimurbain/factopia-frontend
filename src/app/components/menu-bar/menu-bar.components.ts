import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserInfoComponent } from './ui/user-info.component';
import { SideBarMenuComponent } from './ui/side-bar-menu.component';
import { LogoComponent } from './ui/logo.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    UserInfoComponent,
    SideBarMenuComponent,
    LogoComponent,
  ],
  template: `
    <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Left -->
          <app-logo />

          <!-- Right -->
          <div class="flex items-center gap-4">
            <app-user-info [username]="'Alice'" [score]="1337" />

            <div class="md:hidden">
              <p-button
                (click)="isOpen.set(!isOpen())"
                [icon]="isOpen() ? 'pi pi-times' : 'pi pi-bars'"
                styleClass="p-button-text md:hidden"
                [rounded]="true"
              ></p-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->

    <app-side-bar-menu [isOpen]="isOpen()" (close)="isOpen.set(!isOpen())" />

    <div class="h-16"></div>
  `,
})
export class MenuBarComponent {
  isOpen = signal(false);
}
