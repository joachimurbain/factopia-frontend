import { Component, input, effect, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div 
            *ngIf="isVisible()"
            [style.background-color]="color()"
            class="fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white 
                   transform transition-all duration-300 ease-in-out"
            [class.opacity-0]="!isVisible()"
            [class.opacity-100]="isVisible()"
            [class.translate-y-2]="!isVisible()"
            [class.translate-y-0]="isVisible()"
        >
            {{ text() }}
        </div>
    `
})
export class ToastComponent {
    // Required inputs
    text = input.required<string>();
    color = input.required<string>();
    
    // Optional inputs with defaults
    duration = input<number>(3000); // Duration in milliseconds
    
    // Internal state
    isVisible = signal(true);
    
    constructor() {
        // Auto-hide the toast after the specified duration
        effect(() => {
            if (this.isVisible()) {
                setTimeout(() => {
                    this.isVisible.set(false);
                }, this.duration());
            }
        });
    }
} 