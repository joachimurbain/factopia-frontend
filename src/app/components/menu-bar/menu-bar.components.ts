import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    imports: [CommonModule, RouterLink, ButtonModule],
    template: `
        <!-- Fixed header and menu container -->
        <div class="fixed top-0 left-0 right-0 z-50">
            <!-- Navbar -->
            <div class="bg-primary-0 shadow-lg">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <span class="text-2xl font-bold">Factopia</span>
                        </div>
                        
                        <!-- Burger menu button -->
                        <p-button 
                            (click)="isOpen.set(!isOpen())"
                            [icon]="isOpen() ? 'pi pi-times' : 'pi pi-bars'"
                            styleClass="p-button-text"
                            [rounded]="true"
                        ></p-button>
                    </div>
                </div>
            </div>

            <!-- Dropdown menu -->
            <div 
                class="bg-white shadow-lg transition-all duration-300 overflow-hidden md:hidden"
                [class.max-h-0]="!isOpen()"
                [class.max-h-screen]="isOpen()"
            >
                <div class="px-4 py-2 space-y-1">
                    <a 
                        routerLink="/" 
                        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                        (click)="isOpen.set(false)"
                    >
                        <i class="pi pi-home mr-2"></i>Home
                    </a>
                    
                    <a 
                        routerLink="/shorts" 
                        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                        (click)="isOpen.set(false)"
                    >
                        <i class="pi pi-play mr-2"></i>Shorts
                    </a>
                    
                    <a 
                        routerLink="/multiple-choice" 
                        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                        (click)="isOpen.set(false)"
                    >
                        <i class="pi pi-list mr-2"></i>Choix multiple
                    </a>
                    
                    <a 
                        routerLink="/fill-blanks" 
                        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                        (click)="isOpen.set(false)"
                    >
                        <i class="pi pi-pencil mr-2"></i>Mots à trous
                    </a>

                    <a 
                        routerLink="/about" 
                        class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                        (click)="isOpen.set(false)"
                    >
                        <i class="pi pi-info-circle mr-2"></i>About
                    </a>
                </div>
            </div>
        </div>

        <!-- Spacer to prevent content from going under fixed header -->
        <div class="h-16"></div>
    `
})
export class MenuBarComponent {
    isOpen = signal(false);
}
