import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="isOpen()"
      class="fixed inset-0 flex bg-black/50 items-center justify-center z-50"
      (click)="close.emit()"
    >
      <div 
        class="bg-white rounded-lg p-6 w-full max-w-md mx-4"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Partager</h2>
          <button 
            class="text-gray-500 hover:text-gray-700"
            (click)="close.emit()"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>

        <div class="space-y-4">
          <button 
            class="w-full py-3 px-4 bg-[#25D366] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-whatsapp text-xl"></i>
            WhatsApp
          </button>

          <button 
            class="w-full py-3 px-4 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-twitter text-xl"></i>
            Twitter
          </button>

          <button 
            class="w-full py-3 px-4 bg-[#E4405F] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-instagram text-xl"></i>
            Instagram
          </button>

          <button 
            class="w-full py-3 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-hashtag text-xl"></i>
            Threads
          </button>

          <button 
            class="w-full py-3 px-4 bg-[#4267B2] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-facebook text-xl"></i>
            Facebook
          </button>

          <button 
            class="w-full py-3 px-4 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <i class="pi pi-link text-xl"></i>
            Copier le lien
          </button>
        </div>
      </div>
    </div>
  `
})
export class ShareModalComponent {
  isOpen = input.required<boolean>();
  close = output<void>();
} 