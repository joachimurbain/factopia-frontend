import { Component } from "@angular/core";
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menu-bar',
    standalone: true,
    imports: [MenubarModule, CommonModule],
    template: `
        <p-menubar [model]="items">
            <ng-template pTemplate="start">
                <img src="assets/logo.png" height="40" class="mr-2" alt="Factopia Logo"/>
            </ng-template>
        </p-menubar>
    `,
    styles: [`
        :host ::ng-deep .p-menubar {
            background-color: #3B82F6;
        }
    `
    ]
})
export class MenuBarComponent {
    items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: ['/']
        },
        {
            label: 'Quizz',
            icon: 'pi pi-list',
            items: [
                {
                    label: 'Shorts',
                    routerLink: ['/shorts']
                },
                {
                    label: 'Choix multiple',
                    routerLink: ['#']
                },
                {
                    label: 'Mots à trous',
                    routerLink: ['#']
                }
            ]
        },
        {
            label: 'About',
            icon: 'pi pi-info-circle',
            routerLink: ['/about']
        }
    ];
}
