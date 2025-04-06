import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserInfoComponent } from './ui/user-info.component';
import { SideBarMenuComponent } from './ui/side-bar-menu.component';
import { LogoComponent } from './ui/logo.component';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    UserInfoComponent,
    SideBarMenuComponent,
    LogoComponent,
    MenuModule,
  ],
  template: `
    <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Left: Logo -->
          <app-logo />

          <!-- Right -->
          <div class="flex items-center gap-4">
            <!-- Desktop user dropdown -->
            <div class="flex items-center relative">
              <div class="cursor-pointer" (click)="menu.toggle($event)">
                <app-user-info [username]="'Alice'" [score]="1337" />
              </div>
              <p-menu
                #menu
                [popup]="true"
                [model]="userMenuItems"
                styleClass="hidden md:block"
                appendTo="body"
              ></p-menu>
            </div>

            <!-- Mobile burger -->
            <div class="md:hidden">
              <p-button
                (click)="isOpen.set(!isOpen())"
                [icon]="isOpen() ? 'pi pi-times' : 'pi pi-bars'"
                styleClass="p-button-text"
                [rounded]="true"
              ></p-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar for mobile -->
    <app-side-bar-menu [isOpen]="isOpen()" (close)="isOpen.set(false)" />

    <!-- Spacer -->
    <div class="h-16"></div>
  `,
})
export class MenuBarComponent {
  isOpen = signal(false);

  userMenuItems: MenuItem[] = [
    {
      label: 'Déconnexion',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout();
      },
    },
  ];

  logout() {
    console.log('Logging out...');
    // Call your auth service here
  }
}
